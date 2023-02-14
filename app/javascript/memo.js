const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault(); //
    const form = document.getElementById("form"); //formの値を取得し変数formに代入する
    const formData = new FormData(form); //FormDataを生成し変数formDataに代入する
    const XHR = new XMLHttpRequest(); //生成したXMLHttpRequestオブジェクトを変数XHRに格納
    XHR.open("POST", "/posts", true);  //「post」→「posts」に戻す //リクエストの内容を指定する
    XHR.responseType = "json"; //データフォーマットの指定
    XHR.send(formData); //フォームに入力された内容をサーバー側に送信
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content"); //リセットの対象となるフォームの要素contentを取得して、変数formTextに格納
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
 };
 
 window.addEventListener('load', post); //windowでloadされた時にpost関数を呼び出す。
 