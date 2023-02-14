function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault(); //
    const form = document.getElementById("form"); //formの値を取得し変数formに代入する
    const formData = new FormData(form); //FormDataを生成し変数formDataに代入する
    const XHR = new XMLHttpRequest(); //生成したXMLHttpRequestオブジェクトを変数XHRに格納
    XHR.open("POST", "/posts", true); //リクエストの内容を指定する
    XHR.responseType = "json"; //データフォーマットの指定
    XHR.send(formData); //フォームに入力された内容をサーバー側に送信
  });
 };
 
 window.addEventListener('load', post); //windowでloadされた時にpost関数を呼び出す。
 