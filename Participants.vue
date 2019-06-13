<template>
    <div>
      <img src="images/about1.png" width="1260px">
        <div class="next__block pt-5 pb-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="h5">Об участницах проекта "Programmer Ayimdar"</h2>
        </div>
        
        <div class="row">
           <div class="col-lg-4" v-for="card in cards">
             <div class="card" style="width: 18rem;">
                <img :src="card.image" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">{{card.title}}</h5>
                <p class="card-text">{{card.body}}</p>
             </div>
            </div>
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
<script>
import Card from './card.vue'

export default {
  data () {
    return {
      cards: [
        {
          image: require('./images/participants/Мээрим.jpg'),
          title: 'Мээрим',
          body: '28лет '
        },
        {
          image: require('./images/participants/Bermet.jpg'),
          title: 'Бермет',
          body: '23 года '
        },
        {
          image: require('./images/participants/Aiperi.jpg'),
          title: 'Айпери',
          body: '35 лет '
        },
        {
          image: require('./images/participants/Тахмина.jpg'),
          title: 'Тахмина',
          body: '28лет '
        },
        {
          image: require('./images/participants/MeerimA.jpg'),
          title: 'Мээрим',
          body: '22 года'
        },
         {
          image: require('./images/participants/Каныкей.jpg'),
          title: 'Каныкей',
          body: '23 '
        },
        {
          image: require('./images/participants/Айжамал.jpg'),
          title: 'Айжамал',
          body: '25 лет'
        },
        {
          image: require('./images/participants/Алия.jpg'),
          title: 'Алия',
          body: '18 лет '
        },
        {
          image: require('./images/participants/Айбийке.jpg'),
          title: 'Айбике ',
          body: '25 лет'
        },
         {
          image: require('./images/participants/Гюзаль.jpg'),
          title: 'Гюзаль',
          body: '22 года'
        },
        {
          image: require('./images/participants/Чынара.jpg'),
          title: 'Чынара',
          body: '35 лет '
        },
        {
          image: require('./images/participants/Perizat.jpg'),
          title: 'Перизат',
          body: '18 лет '
        },
        {
          image: require('./images/participants/Акмарал.jpg'),
          title: 'Нуриля',
          body: '18 лет '
        },
        {
          image: require('./images/participants/Фатима 2.jpg'),
          title: 'Фатима ',
          body: '25 лет'
        },
         {
          image: require('./images/participants/Nurilya.jpg'),
          title: 'Акмарал',
          body: '18 лет '
        },
        
      ]
    }
  },
  components: {
    Card
  }
}
</script>
<style>
.card-img-top {

}
</style>
