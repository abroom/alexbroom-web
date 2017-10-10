import React from 'react';
import { Badge, Carousel } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <Biopics />
        <div id="about">
          <h1>Welcome!</h1>
          <h4>Since you are here,  you probably want to read up about me, Alexander Do McIntosh Broom or Alex for short.</h4>
          <p>
            I am a creator. I love to create. From writing stories to writing code, from sketchings to cartoons, from lasagnas to cakes. There is too much that I want to learn. Seriously, it is hard to choose. Regardless, I work to make my dreams into reality. Naturally, I gravitated towards the wonders known and unknown of computer science.  For what aspect of humanity does not take some form in our digital world. As discoveries of new digital logic are made, every industry races to be the first to make the next successful application. We live in the midst of the creation of a whole new digital world. A world defined by Code. So how could I not love Code.
          </p>
          <p>
            When it comes to computer science, unsurprisingly, I have become intrigued by the burgeoning fields of machine learning, virtual reality, augmented reality, and cryptocurrencies. Even though these areas are already transforming the way we live our lives, they still have tremendous potential. For the most part, I have focused on machine learning and taken courses on the subject matter. In addition, I am also developing projects with my good friend, Elias Arias, for his Microsoft Hololens. On Sundays, I spend some of my time working on a video game.
          </p>
          <p>
            Outside of coding projects, I spend my time playing tennis, hiking, learning to climb, or overcoming my displeasure of running. I still hate running, but I keep trying to like it. At least, I live in the middle of the scenic Golden, Colorado. So, I have pretty beautiful trails to run along. On rainy daysl, I will be playing board games, video games, or reading. Regardless of the weather, I am always down for a beer, preferably a sour or perhaps any brew at New Terrain, or an Old Fashioned at the Golden Moon Speakeasy. Or ‘The Speasy’ as I like to call it.
          </p>
          <p>
            By the way, I am a dual citizen of Australia and the United States of America. I was born in Australia and now live in the US. I have strong love of both countries, so since I live in the US, I volunteer part of my time with Wolf-PAC, a political action committee dedicated to improving our campaign finance laws. Multiple studies have shown what the people already feel, our legislators respond to the lobbyists who fund their campaign and not the people who vote them into office. I view this situation as a disaster for Democracy and as a giant bottleneck slowing all improvements to the system wanted by the average American.
          </p>
          <p>
            In order to solve this issue, we at Wolf-PAC want the strongest possible solution. Since the supreme court can and has reversed their ruling on campaign finance depending on who sits on their bench, we must go above the supreme court. Which leaves us with passing a 28th amendment to the US Constitution. There are two ways to call for this amendment either through the United States Congress or through the States themselves. Since virtually all federal legislators are part of the problem, we will go through the states. To do this, we ask our state legislators to support our resolution that calls for a Limited Amendment Convention on the topic of campaign finance. The method is a grassroots non-partisan effort across the country. Two-thirds of the states or thirty-four states must call for the convention. Then at the convention, there are multiple safeguards to make sure the state delegates stay on topic. Finally, three-fourths of the states or forty-eight states must ratify the amendment that comes from the convention. Therefore due to ratification, only an amendment that works for both parties would pass the high bar of ratification. And when the parties work together, as seen in US history when great progress resulted from bipartisan efforts, the people will prosper. If you want to form a relationship with your two state legislators by calling them twice a week and having a friendly chat, you may volunteer at Wolf-PAC.com. You can also donate money, but we would rather have you volunteer whatever time you can spare.
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
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/ariasWedding.jpg'} alt="Alicia & Elias"/>
          <Carousel.Caption>
            <p>Alicia & Elias</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/dad.jpg'} alt="Dad 3"/>
          <Carousel.Caption>
            <p>Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/iceCream.jpg'} alt="Natalya, Thomas, & Mum"/>
          <Carousel.Caption>
            <p>Natalya, Thomas, & Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/humaneLeague.jpg'} alt="David, Isabelle, Jason, & Mum"/>
          <Carousel.Caption>
            <p>David, Isabelle, Jason, & Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/bikePower.jpg'} alt="Bike Power"/>
          <Carousel.Caption>
            <p>Bike Power</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={864} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/mum.jpg'} alt="Mum 3"/>
          <Carousel.Caption>
            <p>Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/boardGames.jpg'} alt="Irina, Natalya, Thomas, & Dad"/>
          <Carousel.Caption>
            <p>Irina, Natalya, Thomas & Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/mum2.jpg'} alt="Mum 2"/>
          <Carousel.Caption>
            <p><Badge>Mum</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={520} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/nyc.jpg'} alt="New York City"/>
          <Carousel.Caption>
            <p>New York City</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1232} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/dad3.jpg'} alt="Dad 2"/>
          <Carousel.Caption>
            <p>Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/friends.jpg'} alt="Eric, Whitney, Peter, & David"/>
          <Carousel.Caption>
            <p>Eric, Whitney, Peter, & David</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/bridesman.jpg'} alt="Ali, Mary, Barbara, Whitney, & Anna"/>
          <Carousel.Caption>
            <p><Badge>Ali, Mary, Barbara, Whitney, & Anna</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/peaceCorps.jpg'} alt="Peace Corps"/>
          <Carousel.Caption>
            <p>Peace Corps</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1233} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/snowboarding.jpg'} alt="Austin & Sampson"/>
          <Carousel.Caption>
            <p><Badge>Austin and Sampson</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/david.jpg'} alt="David"/>
          <Carousel.Caption>
            <p>David</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/frozenLake.jpg'} alt="Sampson"/>
          <Carousel.Caption>
            <p>Sampson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={693} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/halloween.jpg'} alt="Kozub & Sampson"/>
          <Carousel.Caption>
            <p>Kozub & Sampson</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/gayerMolls.jpg'} alt="Brenda, Karen, Jimmy, & Thomas"/>
          <Carousel.Caption>
            <p>Brenda, Karen, Jimmy, & Thomas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/polishTavern.jpg'} alt="Polish Tavern"/>
          <Carousel.Caption>
            <p><Badge>Polish Tavern</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1040} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/jimmy.jpg'} alt="Jimmy"/>
          <Carousel.Caption>
            <p>Jimmy</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/dad2.jpg'} alt="Dad"/>
          <Carousel.Caption>
            <p><Badge>Dad</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1047} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/mumDad.jpg'} alt="Mum & Dad 2"/>
          <Carousel.Caption>
            <p>Mum & Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/brooms.jpg'} alt="Brooms"/>
          <Carousel.Caption>
            <p>Brooms</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/sjaan.jpg'} alt="Sjaan"/>
          <Carousel.Caption>
            <p>Sjaan</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/ba.jpg'} alt="Ba, Angela, & Cuong"/>
          <Carousel.Caption>
            <p><Badge>Ba, Angela, & Cuong</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={520} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/gradParty.jpg'} alt="Travis"/>
          <Carousel.Caption>
            <p><Badge>Travis</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/graduation.jpg'} alt="Graduation"/>
          <Carousel.Caption>
            <p><Badge>Graduation</Badge></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={924} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/paintball.jpg'} alt="Paintball"/>
          <Carousel.Caption>
            <p>Paintball</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1046} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/mumDad2.jpg'} alt="Mum & Dad"/>
          <Carousel.Caption>
            <p>Mum & Dad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={548} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/chris.jpg'} alt="Chris"/>
          <Carousel.Caption>
            <p>Chris</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1044} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/mum3.jpg'} alt="Mum"/>
          <Carousel.Caption>
            <p>Mum</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={520} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/whiteHouse.jpg'} alt="The White House"/>
          <Carousel.Caption>
            <p>The White House</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={380} className="img-responsive center-block" src={process.env.PUBLIC_URL + '/images/biopics/firstSuit.jpg'} alt="First Suit"/>
          <Carousel.Caption>
            <p>First Suit</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
