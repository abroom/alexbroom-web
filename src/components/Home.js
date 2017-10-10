import React from 'react';
import { Badge, Carousel } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Biopics/>
        <div id="about" className="main">
          <h1>Welcome!</h1>
          <h4>You must be here to read about me, <b>Alexander Do McIntosh Broom</b>. And by the way, you can just call me <b>Alex</b>.</h4>
          <p>
            I am a <b>creator</b>. From writing stories to writing code, from sketchings to cartoons, from lasagnas to cakes, from compliments to <a href="http://lmgtfy.com/?q=sarcasm">sarcasm</a>, it does not matter, I love to create. There is too much that I want to learn. Seriously, it is hard to choose. Regardless, I work to make my dreams into reality. Naturally, I gravitated towards the wonders known and unknown of <b>computer science</b>.  For what aspect of humanity does not take some form in our digital world. As discoveries of new digital logic are made, every industry races to be the first to make the next successful application. We live in the midst of the creation of a whole new digital world. A world defined by <b>Code</b>. So how could I not love <b>Code</b>.
          </p>
          <p>
            When it comes to computer science, unsurprisingly, I have become intrigued by the burgeoning fields of <b>machine learning</b>, <b>virtual reality</b>, <b>augmented reality</b>, and <b>cryptocurrencies</b>. Even though these areas are already transforming the way we live our lives, they are still deep wells of untapped and tremendous potential. For the most part, I have focused on <b>machine learning</b> and taken courses on the subject matter. In addition, I am also developing projects with my good friend, <a href="https://www.linkedin.com/in/elias-arias-55163125">Elias Arias</a>, for his <b>Microsoft Hololens</b>. I also spend some of my time working on a video game, <b>Black Book</b>.
          </p>
          <p>
            Outside of coding projects, I spend my time playing tennis, hiking, learning to climb, or overcoming my displeasure of running. That last one is difficult. At least, I live in the middle of the scenic <b>Golden, Colorado</b>. So, I have pretty beautiful trails to run along. On rainy days, I will be playing board games, video games, or reading. Regardless of the weather, I am always down for a <b>beer</b>, preferably a <b>sour</b> or perhaps any brew at <a href="http://newterrainbrewing.com/">New Terrain</a>, or an <b>Old Fashioned</b> at the <a href="http://www.goldenmoonspeak.com/">Golden Moon Speakeasy</a> aka <b>The Speasy</b>.
          </p>
          <p>
            By the way, I am a dual citizen of <b>Australia</b> and the <b>United States of America</b>. I was born in Australia and now live in the US. I have strong love of both countries, so since I live in the US, I volunteer part of my time with <b><a href="http://www.wolf-pac.com/">Wolf-PAC</a></b>, a political action committee dedicated to improving our campaign finance laws. Multiple studies have shown what people already feel: our federal legislators respond to the lobbyists who fund their campaign and not the people who vote them into office. I view this situation as a disaster for Democracy and as a giant bottleneck slowing all improvements wanted by the average American.
          </p>
          <p>
            In order to solve this issue, we at <b><a href="http://www.wolf-pac.com/">Wolf-PAC</a></b> want the strongest possible solution. Since the supreme court can and has reversed their rulings on campaign finance depending on who sits on the bench, we must go above the supreme court. Which means adding a <b>28th amendment</b> to the US Constitution. There are two ways to add this amendment either through the United States Congress or through the States themselves. Since virtually all federal legislators are part of the problem, we will go through the states. To do this, we ask our state legislators to support our resolution that calls for a <b>Limited Amendment Convention</b> on the topic of campaign finance. The method is a grassroots non-partisan effort across the country. <b>Two-thirds</b> of the states or <b>thirty-four states</b> must <b>call</b> for the convention. Then at the convention, there are multiple safeguards to make sure the state delegates stay on topic. Finally, <b>three-fourths</b> of the states or <b>forty-eight states</b> must <b>ratify</b> the amendment that comes from the convention. Therefore due to ratification, only an amendment that works for both parties would pass the high bar of ratification. And when the parties work together, as seen in US history when great progress resulted from bipartisan efforts, the people will prosper. So if I have convinced you to become a <b>volunteer</b>, start by forming a relationship with your two state legislators by calling them once a week and having a <b>friendly chat</b>. And of course, sign up at <a href="http://www.wolf-pac.com/">Wolf-PAC.com</a>. You can also donate money, but we would rather have you volunteer whatever time you can spare.
          </p>
        </div>
      </div>
    );
  }
}

class Biopics extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/20989048_1653344358010106_1557043311362374042_o.jpg?oh=667ec8a0da533b440e2148e9d2384477&oe=5A4CC377' alt="Alicia & Elias"/>
          <Carousel.Caption>
            <p>Alicia & Elias</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/19225841_1583827368295139_6974811280884357832_n.jpg?oh=97d9f258e9f8a2ff9ca7b9d272480dd1&oe=5A875467' alt="Dad 3"/>
          <Carousel.Caption>
            <p>Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/19029466_1576509955693547_3256316012638517665_n.jpg?oh=f2cdcc3df2a597ffe6b26bd04a26b469&oe=5A40D0C4' alt="Natalya, Thomas, & Mum"/>
          <Carousel.Caption>
            <p>Natalya, Thomas, & Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/18119576_1529200800424463_5666152406962140415_n.jpg?oh=ec3f407ac973c53dc736133c1de8fa92&oe=5A7B075E' alt="Bike Power"/>
          <Carousel.Caption>
            <p>Bike Power</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/18238170_1312152625521016_7846421846541896871_o.jpg?oh=1b844d350c966596b6671371c29a8019&oe=5A8154D5' alt="David, Isabelle, Jason, & Mum"/>
          <Carousel.Caption>
            <p>David, Isabelle, Jason, & Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/15731860_1403039009707310_5419915452771305784_o.jpg?oh=c9de0f12c32bdab6d46749bae116b11f&oe=5A46F033' alt="Mum 3"/>
          <Carousel.Caption>
            <p>Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/15178996_1362627697081775_6447929441989566076_n.jpg?oh=174c3e41b48057ee78ba20b3aa00886e&oe=5A3B1E5A' alt="Irina, Natalya, Thomas, & Dad"/>
          <Carousel.Caption>
            <p>Irina, Natalya, Thomas & Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/15219401_1362185753792636_6655985297684895599_n.jpg?oh=f049e4794014197ace7fddee69178783&oe=5A3C4B4B' alt="Mum 2"/>
          <Carousel.Caption>
            <p><Badge>Mum</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/14369971_1300240779987134_8742927293153529160_n.jpg?oh=fa90d3dd0f1378db2405231ac88ef4b2&oe=5A39EDE3' alt="New York City"/>
          <Carousel.Caption>
            <p>New York City</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/13495225_1129494590405135_325728077141370510_n.jpg?oh=41f18a12ab57607c9a43dba1caea344e&oe=5A87D9A8' alt="Dad 2"/>
          <Carousel.Caption>
            <p>Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/15250945_10154596638095638_98791170563572713_o.jpg?oh=2fe8b7b7000cecb1cfbadc1ecef0306d&oe=5A831CBE' alt="Eric, Whitney, Peter, & David"/>
          <Carousel.Caption>
            <p>Eric, Whitney, Peter, & David</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/15167472_10154596601285638_8982489827928332674_o.jpg?oh=195562ad88a990407408600716a7bffb&oe=5A87D19E' alt="Ali, Mary, Barbara, Whitney, & Anna"/>
          <Carousel.Caption>
            <p><Badge>Ali, Mary, Barbara, Whitney, & Anna</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/13174021_10154185160193464_5765233213320141153_n.jpg?oh=62aa32afaaef66803f20c41e28f3eb20&oe=5A83423F' alt="Peace Corps"/>
          <Carousel.Caption>
            <p>Peace Corps</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/946176_853482214768273_7540041033208187581_n.jpg?oh=2aa8bc0636eac2a98856b212156abacd&oe=5A828D1E' alt="Austin & Sampson"/>
          <Carousel.Caption>
            <p><Badge>Austin and Sampson</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/1933243_935829349820014_970672650913719943_o.jpg?oh=24fd7b9c62d23aad4ddc78a859922256&oe=5A780B12' alt="David"/>
          <Carousel.Caption>
            <p>David</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/12362900_935825959820353_8776289574806357464_o.jpg?oh=2dba7e4c7c13b4698d8c8de2f242c89d&oe=5A4D1D81' alt="Sampson"/>
          <Carousel.Caption>
            <p>Sampson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/12185151_1055829474449145_8844782347431585902_o.jpg?oh=2cd144a3d57cbbf41969aa92333a06a0&oe=5A4CF0A9' alt="Kozub & Sampson"/>
          <Carousel.Caption>
            <p>Kozub & Sampson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/12027226_901440003258949_4344828040428962195_o.jpg?oh=7de77aa7046e037c48ef4dcca3203230&oe=5A3DFC48' alt="Brenda, Karen, Jimmy, & Thomas"/>
          <Carousel.Caption>
            <p>Brenda, Karen, Jimmy, & Thomas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/12039083_901438936592389_3173390701835821000_o.jpg?oh=4fd7705bda10f28fde91e9d1d5855356&oe=5A85D624' alt="Polish Tavern"/>
          <Carousel.Caption>
            <p><Badge>Polish Tavern</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/11838796_901438323259117_6039828301765198870_o.jpg?oh=f7afd542c35d3074f78172b47351a783&oe=5A816F1C' alt="Jimmy"/>
          <Carousel.Caption>
            <p>Jimmy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/11722620_1030923200252228_7339615418428555529_o.jpg?oh=9517d11794551f8f441c9ef389e552de&oe=5A84014F' alt="Dad"/>
          <Carousel.Caption>
            <p><Badge>Dad</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/10834872_854306104590653_124857449104972145_o.jpg?oh=65792aa0f57d206182d228de92cbbe6f&oe=5A46E150' alt="Mum & Dad 2"/>
          <Carousel.Caption>
            <p>Mum & Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/10496026_770139053007359_8114261940963565343_o.jpg?oh=02c4ff248d20c000e49ce4bb6ef63f07&oe=5A7870CD' alt="Brooms"/>
          <Carousel.Caption>
            <p>Brooms</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/10300210_10202496804120739_732172286210061432_n.jpg?oh=a7c1310f359a3f9e96a46623d24eca65&oe=5A7C167E' alt="Sjaan"/>
          <Carousel.Caption>
            <p>Sjaan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/10295489_10202335464247343_7521155456553562978_o.jpg?oh=8b70e6eb9b43765f4ab9ac3c60232a19&oe=5A45A847' alt="Ba, Angela, & Cuong"/>
          <Carousel.Caption>
            <p><Badge>Ba, Angela, & Cuong</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/861048_792761310735086_5063995774508642004_o.jpg?oh=15782f257433b88fba279e09081a7330&oe=5A4C0CEE' alt="Travis"/>
          <Carousel.Caption>
            <p><Badge>Travis</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/1979182_791926974151853_5353464435313193606_o.jpg?oh=b9a4568d05dbebff46a453ee13a993f0&oe=5A464B2C' alt="Graduation"/>
          <Carousel.Caption>
            <p><Badge>Graduation</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/10256959_10153978870765526_6663367066041198402_n.jpg?oh=1e2cec68729abab58570d3f40224dd16&oe=5A7C8D5B' alt="Paintball"/>
          <Carousel.Caption>
            <p>Paintball</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/1514610_722888981055653_1152751881_n.jpg?oh=7986e7b960d28173e568464c27f69d77&oe=5A3A44A7' alt="Mum & Dad"/>
          <Carousel.Caption>
            <p>Mum & Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/1040379_629331410411411_1528641080_o.jpg?oh=a5433cb564e5b762ebe3d8be1cb0ebfb&oe=5A43199A' alt="Chris"/>
          <Carousel.Caption>
            <p>Chris</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/1040034_629330513744834_362427834_o.jpg?oh=19751e2724ceea0ff97109595424d682&oe=5A480EC3' alt="Mum"/>
          <Carousel.Caption>
            <p>Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/418467_374730619263226_69041459_n.jpg?oh=595181f8b70f6434dfa0cbb48e87bb5a&oe=5A464D89' alt="The White House"/>
          <Carousel.Caption>
            <p>The White House</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/14232412_1287217631289449_2311880154959015188_n.jpg?oh=885e0207c374971783f49a01997996e7&oe=5A76BB97' alt="First Suit"/>
          <Carousel.Caption>
            <p>First Suit</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
