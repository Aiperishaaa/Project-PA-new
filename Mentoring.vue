<template>
    <div>
        <div class="title">
    <h1 class="theme-mentoring">Менторство</h1>
  </div>
  <p class="p10">Если Вы желаете стать ментором или ищете ментора просьба заполнить заявку.</p>
  <h4>ЗАЯВКА</h4>
  <div class="row">
<div class="col-lg-6">
  <img class="mentoring"src="images/mentoring.png">
  </div>
  <div class="col-lg-6">
  <div id="request">
      <div class="content2">
          <div class="form">
            <form onsubmit="SubmitForm(event)">
              <select name="mentoring" class="form-control" required>
                  <option disabled value="1">Выберите правильный ответ</option>
                  <option value="2">Хочу стать ментором</option>
                  <option value="3">Ищу ментoра</option>
              </select>
              <input required name="name" type="text" id="name" class="form-control" placeholder="Имя">
              <input required name="surname" type="text" class="form-control" placeholder="Фамилия">
              <input required name="phone" type="phone" class="form-control" id="formGroupExampleInput" placeholder="Ваш телефон">
              <input required name="email" type="email" class="form-control" id="formGroupExampleInput" placeholder="E-mail">
              <input required name="age" type="number" class="form-control" id="formGroupExampleInput" placeholder="Ваш возраст">
              <input required name="skills" type="text" class="form-control" id="formGroupExampleInput" placeholder="Какими навыками хотите поделиться или улучшить?">
              <input type="submit" class="buttonSubmit" id="green" value="Отправить"></input>
            </form>  
          </div>
      </div>
  </div>
 </div>
  </div>
  
   
    
</template>

<script>
export default {

}
</script>

<style>
#request {
  width: 555px;
  height: 500px;
  padding: 10px;
  margin: 15px 0 5px 50px;
  border: 2px grey solid;
  border-radius: 0.3rem;
}
.form {
  margin: 15px 0 0 0;
  width: 500px;
}
h4 {
  margin-left: 260px;
}
.input_item {
  margin: 2px 0 0 0;
  width: 500px;
}
.buttonSubmit {
  margin-left: 200px;
  margin-top: 40px;
  width:100px;
  height: 30px;
}/*
input {
  margin: 3px 0 0 3px;
}*/
.form-control {
  margin: 10px 0 0 10px;
}
.theme-mentoring {
  margin-left: 250px;
}
.p10 {
  margin-left: 50px;
}
.mentoring {
  
}
</style>
