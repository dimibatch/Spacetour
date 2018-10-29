import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

declare var TweenMax;

@Component({
  selector: 'app-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.css']
})
export class TopDestinationsComponent implements OnInit {

  param_destinations = "";
  


  public destinations :any[]= [
    {
      destination : 'Jupiter',
      ville : 'Itridence',
      image : 'https://thumbs.dreamstime.com/t/hausse-bagu%C3%A9e-de-plan%C3%A8te-au-dessus-de-paysage-froid-60548851.jpg'
    },
    {
      destination : 'Mercury',
      ville : 'Plaiving',
      image : 'https://www.tunibox.com/images/posts//2008/12/50_espace/integration.jpg'
    },
    {
      destination : 'Mercury',
      ville : 'Grew',
      image : 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/kosmos-pejzazh-planety-41300.jpg'
    },
    {
      destination : 'Mercury',
      ville : 'Lahanini',
      image : 'http://4everstatic.com/images/850xX/dessins/digital-art/sci-fi-paysage,-planetes,-mer,-nuages,-nuit-205269.jpg'
    },
    {
      destination : 'Mercury',
      ville : 'Koplac',
      image : 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/kosmos-pejzazh-planety-34166.jpg'
    },
    {
      destination : 'Mercury',
      ville : 'Qathahiri',
      image :'https://dreamsky10.com/wp-content/uploads/2017/07/Beautiful-Space-HD-by-bajumlufias.jpg'
    },
    {
      destination : 'Mars',
      ville :'Shopolis',
      image :'http://4everstatic.com/images/850xX/dessins/digital-art/sci-fi-paysage,-planetes-150910.jpg'
    },
    {
      destination : 'Neptune',
      ville :'Kofast',
      image :'http://nevseoboi.com.ua/uploads/posts/2011-03/1300573180_wallpapers-space-152_nevseoboi.com.ua.jpg'
    },
    {
      destination : 'Neptune',
      ville :'Mohaî',
      image :'http://www.fondsecran.eu/pictures/2013/1204/2/landscapes-stars-planets-dig-wallpaper-685272.jpg'
    },
    {
      destination : 'Neptune',
      ville :'Glawi',
      image :'http://waper.ru/media/201105/04/9/276752-3mo74b-vl.jpg'
    },
    {
      destination : 'Neptune',
      ville :'Adrahla',
      image :'https://images3.alphacoders.com/210/210467.jpg'
    },
    {
      destination : 'Pluto',
      ville : 'Enya',
      image :'https://ae01.alicdn.com/kf/HTB1raJrMXXXXXbmaXXXq6xXFXXXq/Paysage-plan-te-science-fiction-meteor-flash-travers-le-ciel-des-prairies-tissu-soie-art-mur.jpg_640x640.jpg'
    },
    {
      destination : 'Earth',
      ville : 'Gotham City',
      image :'https://vignette.wikia.nocookie.net/dccu/images/4/44/Gotham_City_Promotional_Photo.jpg/revision/latest?cb=20170405014556'
    },
    {
      destination : 'Earth',
      ville : 'Metropolis',
      image :'https://www.journaldugeek.com/content/uploads/2018/02/metropolis-prequelle-superman-dc.jpg'
    },
    {
      destination : 'Earth',
      ville : 'New-York',
      image :'https://images.musement.com/cover/0002/49/thumb_148242_cover_header.jpeg?w=1200&h=630&q=60&fit=crop'
    },
    {
      destination : 'Earth',
      ville : 'Victoria',
      image :'https://www.msccroisieres.fr/fr-fr/Assets/Port-Victoria_intro_15769_12333_433-280_Images.jpg'
    },
    {
      destination : 'Saturn',
      ville :'Ozlelez',
      image :'https://t1.pixers.pics/img-1fb6f67c/posters-paysage-planete-terre-illustration-apocalypse.jpg?H4sIAAAAAAAAA3WOXW7EIAyEr0MkEhsImOQA-7pHiFhCtmnzg4BtVz19WVV9rPzg8Ujjb-BxZLcE8OEoIcG-zvMWYFm3euUxhbx-B4ZckWzG6m4MEZvx_AzJpzOyViNvRa-4Eci1oGb8cjW5u_TB3kqJeQTIqovrs76ry2fwewaJggAt6MEOVqgFB6NuU9zaXNwxuzS3vX4q7OJx5_ia5q8KIXJ6VShp3VntdFZYYe_x3sA_wF8NNQWXKygDUgDZl6jWdLkqIwVZZSZhg5NkZLiZngY_aPJ-IWFw1kb6ILpK-QEUWnXTMAEAAA=='
    },
    {
      destination : 'Venus',
      ville :'Andginia',
      image :'http://mississippi.m.i.pic.centerblog.net/o/cb563e33.jpg'
    },
    {
      destination : 'Venus',
      ville :'Kalaal',
      image :'https://s-media-cache-ak0.pinimg.com/originals/d0/ff/bc/d0ffbc38d85a1adadc1faae76ce990a7.jpg'
    },
    {
      destination : 'Venus',
      ville :'Opaly',
      image :'https://i0.wp.com/ae01.alicdn.com/kf/HTB1wKIaXL9TBuNjy0Fcq6zeiFXaz/Paisagem-da-natureza-da-%C3%A1gua-pedras-do-mar-nuvens-reflex%C3%A3o-da-luz-solar-rock-hill-sala.jpg?crop=5,2,900,500&quality=2880'
    },
    {
      destination : 'Uranus',
      ville :'Onimouth',
      image :'https://ae01.alicdn.com/kf/HTB10xevJFXXXXaiXXXXq6xXFXXXZ/Sci-fi-plan-tes-alien-univers-lumi-re-lumineux-nature-paysages-montagnes-tissu-soie-art-mur.jpg_640x640.jpg'
    },
    {
      destination : 'Saturn',
      ville :'Phlymouth',
      image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-VgmfnM1nzEX0Ffc3y_gjFUiDsMJzPyYpcTCqs6PZ5RQdEUd3Lg'
    },
    {
      destination : 'Saturn',
      ville :'Fregih',
      image :'https://i.pinimg.com/originals/40/5c/06/405c06fd46201f62c47d51d1a6a61556.jpg'
    },
    {
      destination : 'Saturn',
      ville :'Thoüm',
      image :'https://s1.1zoom.ru/big0/461/413424-blackangel.jpg'
    },
    {
      destination : 'Mars',
      ville :'Sravlöv',
      image :'http://theglobserver.com/wp-content/uploads/2015/10/seul-sur-mars-nouvelle-bande-annonce_cover.jpg'
    },
    {
      destination : 'Mars',
      ville :'Liahn',
      image :'https://medias.pourlascience.fr/api/v1/images/view/5a82a8428fe56f68c005091b/wide_420/image.jpg'
    },
    {
      destination : 'Mars',
      ville :'Viahihanah',
      image :'https://img.gentside.com/article/mars/paysage-de-mars_ca51c47d9bc92014e756034c3bcc3e1135020938.jpg'
    },
    {
      destination : 'Mars',
      ville :'Wathflow',
      image :'https://planetarium-st-etienne.fr/seances/planetes/Cam5_Large45.jpg'
    },
    {
      destination :'Moon',
      ville : 'Copernic',
      image: 'http://fibrechannel-europe.com/wp-content/uploads/2018/04/lunar-landscape-8-sensational-nasa-google-search-excavations-pinterest.jpg'
    },
    {
      destination :'Moon',
      ville : 'Langrenus',
      image: 'https://www.sopapeldeparede.com.br/wp-content/uploads/2010/12/47314_Papel-de-Parede-Planeta-Terra-Visao-da-Lua_1600x1200-1024x768.jpg'
    },
    {
      destination :'Moon',
      ville : 'Tycho',
      image: 'http://thicon.t.h.pic.centerblog.net/ol2td0sq.gif'
    },
    {
      destination :'Moon',
      ville : 'Kepler',
      image: 'https://fr.cdn.v5.futura-sciences.com/buildsv6/images/wide1920/4/b/2/4b280c37f5_93695_as15-88-11866orig.jpg'
    },
    
    {
      destination : 'Uranus',
      ville :'Kläfin',
      image :'https://ufoetscience.files.wordpress.com/2015/11/82e68866ba224111176fc07f0da23.jpg'
    },
    {
      destination : 'Uranus',
      ville :'Hewyen',
      image :'http://carb.one/wp-content/uploads/2015/08/paysage_pluton2-750x419.jpg'
    },
    {
      destination : 'Uranus',
      ville :'Mahnhaflan',
      image :'http://astroguyz.com/wp-content/uploads/2009/03/180_plutoperihelion.jpg'
    },
    {
      destination : 'Uranus',
      ville :'Zörg',
      image :'https://www.universetoday.com/wp-content/uploads/2008/04/hydra.jpg'
    },
    {
      destination : 'Pluto',
      ville : 'Azraël',
      image :'http://ekladata.com/updJ3IHRVWJeoWg9KjEFBjUAtug.jpg'
    },
    {
      destination : 'Pluto',
      ville : 'Irish',
      image :'http://justinmorel.info/wp-content/uploads/2017/03/planet.jpg'
    },
    {
      destination : 'Pluto',
      ville : 'Quote',
      image :'http://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2017/02/22/node_122464/25821333/public/2017/02/22/B9711209966Z.1_20170222193453_000%2BGIR8IV2EJ.1-0.jpg?itok=Hn19kc44'
    },
    {
      destination : 'Pluto',
      ville : 'Vameski',
      image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRln6ycPDSaSpc8vNEnyf6GK3FkaS8uKyOhEoT0SdrWHRd-chfi'
    },
    {
      destination : 'Jupiter',
      ville : 'Mayan',
      image : 'http://secretnews.fr/wp-content/uploads/2017/02/donald-trump-golf-planete-space-espace.jpg'
    },
    {
      destination : 'Jupiter',
      ville : 'Pletica',
      image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOzX6UlXkXi0YEvN6VJkaGhr74wJLMxaFwxkEt3_kHZWxeh1anDA'
    },
    {
      destination : 'Jupiter',
      ville : 'Dwerja',
      image :'http://www.starwars-holonet.com/news/2014/20141005-sw-rebels-critique%20pilote-2.jpg'
    },
    {
      destination : 'Jupiter',
      ville : 'Jarni',
      image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6z7Ys0TBKeT6G827Ja4Mntc-83h-SJqutClRPn7d2Jrbm_zQjZw'
    },
    
]
  
  constructor(private data:DataService) { }

  ngOnInit() {
  }

  public scrollTop(){
    let pos = parseInt(window.pageYOffset.toString());
    let proxy = { y: pos };
    TweenMax.to(
      proxy,
      1,
      {
        y: 200,
        onUpdate: function () {
          window.scrollTo(0, proxy.y);
        }
      }
    );
  }

  public chgePlanet(){
    if (("mercury").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('mercury');
    }
    if (("venus").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('venus');
    }
    if (("moon").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('moon');
    }
    if (("earth").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('earth');
    }
    if (("mars").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('mars');
    }
    if (("jupiter").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('jupiter');
    }
    if (("saturn").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('saturn');
    }
    if (("neptune").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('neptune');
    }
    if (("uranus").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('uranus');
    }
    if (("pluto").indexOf(this.param_destinations)>-1){
      this.data.changeMessage('pluto');
    }
    
      
  }

}
