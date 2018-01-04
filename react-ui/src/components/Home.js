import React from 'react';
import { Badge, Carousel } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Biopics/>
        <div id="about" className="main">
          <h1>Welcome!</h1>
          <h4>You must be here to read about me, <b>Alexander Do McIntosh Broom</b>. By the way, you can just call me <b>Alex</b>.</h4>
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
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=19k3Wgy5A7A_OmUdYjzv06MgDpBZQGZfx' alt="Alicia & Elias"/>
          <Carousel.Caption>
            <p>Alicia & Elias</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1EzczEPi7HN4jCJ_cFzI0XYXl-diSgEDK' alt="Dad 3"/>
          <Carousel.Caption>
            <p>Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1wevuvLZur7BoHwp3zPK8rYJKlurS941Q' alt="Natalya, Thomas, & Mum"/>
          <Carousel.Caption>
            <p>Natalya, Thomas, & Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1K99iIWvKgfg2TMMIAQV-R7QEYiw0fe8a' alt="Bike Power"/>
          <Carousel.Caption>
            <p>Bike Power</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1N1UbgysUPuG7_MgFjxXZpmtZIz6rVliG' alt="David, Isabelle, Jason, & Mum"/>
          <Carousel.Caption>
            <p>David, Isabelle, Jason, & Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1NucIFA-iPtWBG5oAbQ2WJ2z4_bY8NvBU' alt="Mum 3"/>
          <Carousel.Caption>
            <p>Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=13meD9yFVNQD2VrhQwFhFr2RsarkH4kDm' alt="Irina, Natalya, Thomas, & Dad"/>
          <Carousel.Caption>
            <p>Irina, Natalya, Thomas & Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1k6VQ2426LO96NSRyHuL90nOf15zEp0S3' alt="Mum 2"/>
          <Carousel.Caption>
            <p><Badge>Mum</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1-j452kFTtDcPj5pT2XmldA5OaCWvrThN' alt="New York City"/>
          <Carousel.Caption>
            <p>New York City</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1PIjUo1NrF0pp7huuHU7cbWpTAGXK4t5y' alt="Dad 2"/>
          <Carousel.Caption>
            <p>Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=153UycoAdTdwzsKTHhV3Iydipg2p4ZFue' alt="Eric, Whitney, Peter, & David"/>
          <Carousel.Caption>
            <p>Eric, Whitney, Peter, & David</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1uGiU65FJjjIgfd75zbeywRffBT8h5Ou8' alt="Ali, Mary, Barbara, Whitney, & Anna"/>
          <Carousel.Caption>
            <p><Badge>Ali, Mary, Barbara, Whitney, & Anna</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=14VuQxk-XEqDc-BSU14dZIxKIJY6x5scb' alt="Peace Corps"/>
          <Carousel.Caption>
            <p>Peace Corps</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1cbOJQU-lk2iy5zm5695r61gHGE5JpadV' alt="Austin & Sampson"/>
          <Carousel.Caption>
            <p><Badge>Austin and Sampson</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1AVoWHyLqw-7gLcaTw7dA8tIi9oOABnP9' alt="David"/>
          <Carousel.Caption>
            <p>David</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1zLqy0RcU298IiZ_5YZgdenVV1QkHrV7r' alt="Sampson"/>
          <Carousel.Caption>
            <p>Sampson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1Yulon_KdjDqdRT4-KFtJe3OLaRTFZFTs' alt="Kozub & Sampson"/>
          <Carousel.Caption>
            <p>Kozub & Sampson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1DvE9ObfsN3QB9SJS4mj2EmtaS6187zNL' alt="Brenda, Karen, Jimmy, & Thomas"/>
          <Carousel.Caption>
            <p>Brenda, Karen, Jimmy, & Thomas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1I4MiGeiVAJghCvmPYfzs8YQ9_oveLsYj' alt="Polish Tavern"/>
          <Carousel.Caption>
            <p><Badge>Polish Tavern</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=19S-pryuRGyjmbL09VE6707B3DYKhPqSX' alt="Jimmy"/>
          <Carousel.Caption>
            <p>Jimmy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1JGgaG4gno2V73hIEeX4kZkWQ6170txif' alt="Ba"/>
          <Carousel.Caption>
            <p>Ba</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1Hs6hcN0q-IiGIR-RvPm-JFlVnjFNHwde' alt="Dad"/>
          <Carousel.Caption>
            <p><Badge>Dad</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1f_Ak_jraFR86pVDAJWL-RYybTgNIHshN' alt="Dad & Mum 2"/>
          <Carousel.Caption>
            <p>Dad & Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1qczZ_3tkwRwbugB7twb5qNL2aM1XLN8o' alt="Brooms"/>
          <Carousel.Caption>
            <p>Brooms</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1ODMDXD6YH45x9u5tiMNxMvtHLyphWbFt' alt="Sjaan"/>
          <Carousel.Caption>
            <p>Sjaan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1SpoQOQ-H1s73RYwl7cZNBfgSZ3ZXk6R1' alt="Ba, Angela, & Cuong"/>
          <Carousel.Caption>
            <p><Badge>Ba, Angela, & Cuong</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1MpjrUWA1M4JZ7Pyupt50-j3yPNXmXzKe' alt="Travis"/>
          <Carousel.Caption>
            <p><Badge>Travis</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1MapdxpIiIZmJ2gtNb1a5JCkSnmJ9slyV' alt="Graduation"/>
          <Carousel.Caption>
            <p><Badge>Graduation</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1_2yErJjUMtXzYEQiG__ELOUua6AWHvjY' alt="Paintball"/>
          <Carousel.Caption>
            <p>Paintball</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=19cM6PbDctncSCkXiFyTWa7P-1fyrBdX-' alt="Chris"/>
          <Carousel.Caption>
            <p>Chris</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1scGHgqYdyJKsexUQHBo0qcZXmgF9Y_s3' alt="Mum"/>
          <Carousel.Caption>
            <p>Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1GKEB2wssIsdCowgr_k-FoXuBYdSXd2UX' alt="The White House"/>
          <Carousel.Caption>
            <p>The White House</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-responsive center-block" src='https://drive.google.com/uc?export=view&id=1hVPqRO3zKQqKBIa_BtX2j6byLJ28WrNM' alt="First Suit"/>
          <Carousel.Caption>
            <p>First Suit</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
