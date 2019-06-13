<template>
<div class="container">
    <vs-row vs-justify="center">
    <vs-col class="p-2" type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <vs-card class="cardx">
        <div slot="header">
        </div>
        <div class="media" slot="media">
         <img src="./images/activityIT/3IT.jpg">
        </div>
        <div>
          <span>IT Академия выступила партнером VII Фестиваля образования.
              Мероприятие было организованно Фондом "Инициатива Розы Отунбаевой" и посвященно ИКТ в образовании и IT образованию.
            </span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
            <vs-button color="primary" icon="turned_in_not"></vs-button>
            <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col class="p-2" type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <vs-card class="cardx">
        <div slot="header">
        </div>
        <div class="media" slot="media">
         <img src="./images/activityIT/2IT.jpg">
        </div>
        <div>
          <span>Бизнес молодость Практические курсы по управлению бизнесом (Маркетинг, Финансы, Человеческие ресурсы, Продажи)</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
            <vs-button color="primary" icon="turned_in_not"></vs-button>
            <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col class="p-2" type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <vs-card class="cardx">
        <div slot="header">
          </div>
        <div class="media" slot="media">
          <img src="./images/activityIT/1IT.jpg">
        </div>
        <div>
          <span>Друзья, как вы знаете стартовало всемирное движение ЧАС КОДА по всей стране и IT academy не остается в стороне! 
            Мы устраиваем час кода с Азисом Абакировым! 10.12.2018 в 18:00 в Ололохауз Эркиндик. 
            Приходите, всех научим кодить и не только</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
            <vs-button color="primary" icon="turned_in_not"></vs-button>
            <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</div>
</template>
<script>
export default {

}
</script>
<style>
.cardx {
    margin: 15px
}
.media {
    width: 100%;
    height: 300px;
}
.media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>