<template>
  <div>
    <div class="overlay"> 
        <img class="PAgirls" src="images/girl.png" height="450px" >
        <video class="section__video" autoplay muted="muted">
            <source src="video/duel3.mp4">
        </video>
        <div class="main__text">
          <h1>Programmer Ayimdar</h1>
          <h5>Это шанс получить профессию будущего, обрести высокооплачиваемую работу, жить в Кыргызстане, и работать со всем миром!</h5>
          <a href="about" ><button class="btn btn-dark"  >Читать дальше >> </button></a>
        </div>
    </div>
    <!-- Next -->
    <div class="next__block pt-5 pb-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="h5">ПОСЛЕДНИЕ НОВОСТИ</h2>
        </div>
        <div class="row">
          <div class="col-lg-4" v-for="card in cards">
             <div class="card" style="width: 18rem;">
                <img :src="card.image" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">{{card.title}}</h5>
                <p class="card-text">{{card.body}}</p>
                <a href="ActivityPA" class="btn btn-primary">Подробнее</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Next -->
    <div class="next__block pt-5 pb-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="h5">ПОСЛЕДНИЕ IT МЕРОПРИЯТИЯ</h2>
         
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="about__me-img">
              <img src="images/15.jpg" alt="">
            </div>
          </div>
          <div class="col-lg-6">
            
            <h4>IT Destination</h4>
            <p>9 июня в городе Бишкек прошел Форум «Кыргызстан - следующая глобальная IT дестинация». Мероприятие было организовано Парк Высоких Технологий Кыргызской Республики (ПВТ КР), Сentral Eurasian Leadership Alliance (CELA KG) и Кыргызская Ассоциация Разработчиков Программного Обеспечения и Услуг(КАРПОУ).⠀
            На форуме презентовали IT рынок Кыргызстана и представили его как надежного партнера и поставщика качественных IT услуг.⠀</p>
            <p>На форуме приняли более 80 руководителей и инвесторов крупных компаний из США, Германии, Великобритании, Малайзии, Индонезии, Израиля, Саудовской Аравии, Омана, Египта, Туниса, Шри Ланки, Иордании, Пакистана, Афганистана, Монголии и всех стран Центральной Азии. IT компании КР представили свои проекты и достижения, а IT Академия совместно с участницами проекта ProgrammerAyimdar рассказала о результатах социальных проектов.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Next -->
    <div class="statics next__block pt-5 pb-5">
       <!-- <div class="text-center mb-5"></div> -->
        <div class="container">
          <div class="row">
            <div class="col-lg-3"><img class="icons" src="images/icons/applic.png">Более 600 заявок</img></li></div>
            <div class="col-lg-3"><img class="icons" src="images/icons/lady.png">Отобраны 40 девушек</img></li></div>
            <div class="col-lg-3"><img class="icons" src="images/icons/age.png">В возрасте 15 - 37 лет</img></li></div>
            <div class="col-lg-3"><img class="icons" src="images/icons/period.png">Обучение 9 мес</img></li></div>
          </div>
        </div>
    </div>
    <!-- Next -->
    
  </div>
</template>

<script>
import Card from './card.vue'

export default {
  data () {
    return {
      cards: [
        {
          image: require('./images/1.jpg'),
          title: 'Тимбилдинг Programmer Ayimdar',
          body: ' '
        },
        {
          image: require('./images/2.jpg'),
          title: 'Экскурсия в крупные ведущие IT компании',
          body: ' '
        },
        {
          image: require('./images/3.jpg'),
          title: 'Эффективное составление резюме',
          body: ' '
        },
        {
          image: require('./images/7.jpg'),
          title: 'Поколение Z Цифровой человек',
          body: ' '
        },
        {
          image: require('./images/13.jpg'),
          title: 'Практические курсы по управлению бизнесом',
          body: ' '
        },
        {
          image: require('./images/6.jpg'),
          title: 'Практические курсы по программированию',
          body: ' '
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style>
.card {
  margin-bottom: 40px;
  border: 1px solid rgb(67, 109, 245);
  opacity: 0.8;
  transition: all 1s ease;
}
.card:hover {
  margin-bottom: 40px;
  border: 5px solid rgb(67, 109, 245);
  opacity: 1;
}
.about__me-img {
  height: 500px;
  width: 540px;
  overflow: hidden;
  border: 15px solid #ddd;
  padding: 3px;
}
.statics {
  width: 100%;
  background-color: #0663f8;
  color: white;
}

.about__me-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  
}
.overlay {
  position: relative;
  overflow: hidden;
  height: 100vh;
}
.section__video {
  width: 100%;
  overflow: hidden;
}

.main__text {
  position: absolute;
  top: 40%;
  right: 20%;
  text-align: left;
  color: #fff;
  width: 50%;
}

.main__text h1 {
  font-size: 3rem;
  font-family: 'Exo 2';
  font-weight: 700;
  text-transform: uppercase;
}
.PAgirls {
  position: absolute;
  left: 0;
  bottom: 0px;
  margin: 0px 0 0 60px;
  z-index: 1;
}
.PAgirls:hover {
  position: absolute;
  left: 0;
  bottom: 0px;
  margin: 0px 0 0 60px;
  z-index: 1;
  transition: all 0.3s ease;
  
}

</style>
