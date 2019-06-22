import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import Header from './Header';
import './index.css';

// Importing all of the country outlines 
// and the country's respective flags (starts with F) from the src folder
import usa from './Components/1.png';
import canada from'./Components/2.png';
import china from './Components/3.png';
import australia from'./Components/4.png';
import india  from './Components/5.png';
import uk from'./Components/6.png';
import russia from './Components/7.png';
import italy from'./Components/8.png';
import mexico from './Components/9.png';
import france from'./Components/10.png';
import germany from './Components/11.png';
import brazil from'./Components/12.png';
import spain from './Components/13.png';
import egypt from'./Components/14.png';
import japan from './Components/15.png';
import newzealand from'./Components/16.png';
import pakistan from './Components/17.png';
import iceland from'./Components/18.png';
import norway from './Components/19.png';
import peru from'./Components/20.png';
import greece from './Components/21.png';
import denmark from'./Components/22.png';
import chile from './Components/23.png';
import cuba from'./Components/24.png';
import turkey from './Components/25.png';
import indonesia from'./Components/26.png';
import southafrica from './Components/27.png';
import finland from'./Components/28.png';
import ireland from './Components/29.png';
import poland from'./Components/30.png';
import sweden from './Components/31.png';
import israel from'./Components/32.png';
import iran from'./Components/33.png';
import nepal from './Components/34.png';
import madagascar  from './Components/35.png';
import iraq from'./Components/36.png';
import syria from './Components/37.png';
import phillipines from'./Components/38.png';
import vietnam from './Components/39.png';
import thailand from'./Components/40.png';
import northkorea from './Components/41.png';
import portugal from'./Components/42.png';
import argentina from './Components/43.png';
import romania from './Components/rom.png';
import ukraine from'./Components/44.png';
import southkorea from './Components/45.png';
import austria from './Components/aus.png';
import switzerland from'./Components/46.png';
import malaysia from'./Components/47.png';
import venezuela from'./Components/48.png';
import belgium from './Components/49.png';
import mongolia from'./Components/50.png';
import jamaica from './Components/51.png';
import panama from './Components/pan.png';
import afghanistan from'./Components/52.png';
import vaticancity from './Components/vat.png';
import haiti from './Components/ha.png';
import hungary from'./Components/hun.png';
import saudiarabia from './Components/53.png';
import srilanka from'./Components/sri.png';
import bangladesh from'./Components/bang.png';
import macedonia from './Components/mac.png';
import ethiopia from'./Components/54.png';
import netherlands from'./Components/nl.png';
import unitedarabemirates from'./Components/uae.png';
import armenia from'./Components/arm.png';
import kazakhstan from './Components/kaz.png';
import somalia from './Components/55.png';
import colombia from'./Components/col.png';
import tanzania from'./Components/tanz.png';
import cambodia from'./Components/camb.png';
import tunisia from'./Components/tunis.png';
import mali from'./Components/mal.png';
import cyprus from './Components/56.png';
import Fusa from './Components/usa.png';
import Fcanada from './Components/canada.png';
import Fchina from './Components/china.png';
import Faustralia from'./Components/australia.png';
import Findia  from './Components/india.png';
import Fuk from'./Components/uk.png';
import Frussia from './Components/russia.png';
import Fitaly from'./Components/italy.png';
import Fmexico from './Components/mexico.png';
import Ffrance from'./Components/france.png';
import Fgermany from './Components/germany.png';
import Fbrazil from'./Components/brazil.png';
import Fspain from './Components/spain.png';
import Fegypt from'./Components/egypt.png';
import Fjapan from './Components/japan.png';
import Fnewzealand from'./Components/newzealand.png';
import Fpakistan from './Components/pakistan.png';
import Ficeland from'./Components/iceland.png';
import Fnorway from './Components/norway.png';
import Fperu from'./Components/peru.png';
import Fgreece from './Components/greece.png';
import Fdenmark from'./Components/denmark.png';
import Fchile from './Components/chile.png';
import Fcuba from'./Components/cuba.png';
import Fturkey from './Components/turkey.png';
import Findonesia from'./Components/indonesia.png';
import Fsouthafrica from './Components/southafrica.png';
import Ffinland from'./Components/finland.png';
import Fireland from './Components/ireland.png';
import Fpoland from'./Components/poland.png';
import Fsweden from './Components/sweden.png';
import Fisrael from'./Components/israel.png';
import Firan from'./Components/iran.png';
import Fnepal from './Components/nepal.png';
import Fmadagascar  from './Components/madagascar.png';
import Firaq from'./Components/iraq.png';
import Fsyria from './Components/syria.png';
import Fphillipines from'./Components/phillipines.png';
import Fvietnam from './Components/vietnam.png';
import Fthailand from'./Components/thailand.png';
import Fnorthkorea from './Components/northkorea.png';
import Fportugal from'./Components/portugal.png';
import Fargentina from './Components/argentina.png';
import Fromania from './Components/romania.png';
import Fukraine from'./Components/ukraine.png';
import Fsouthkorea from './Components/southkorea.png';
import Faustria from'./Components/austria.png';
import Fswitzerland from'./Components/switzerland.png';
import Fmalaysia from'./Components/malaysia.png';
import Fvenezuela from'./Components/venezuela.png';
import Fbelgium from './Components/belgium.png';
import Fmongolia from'./Components/mongolia.png';
import Fjamaica from './Components/jamaica.png';
import Fpanama from './Components/panama.png';
import Fafghanistan from'./Components/afghanistan.png';
import Fvaticancity from './Components/vaticancity.png';
import Fhaiti from './Components/haiti.png';
import Fhungary from'./Components/hungary.png';
import Fsaudiarabia from './Components/saudiarabia.png';
import Fsrilanka from'./Components/srilanka.png';
import Fbangladesh from'./Components/bangladesh.png';
import Fmacedonia from './Components/macedonia.png';
import Fethiopia from'./Components/ethiopia.png';
import Fnetherlands from './Components/netherlands.png';
import Fuae from './Components/unitedarabemirates.png';
import Farmenia from'./Components/armenia.png';
import Fkazakhstan from'./Components/kazakhstan.png';
import Fsomalia from './Components/somalia.png';
import Fcolombia from './Components/colombia.png';
import Ftanzania from'./Components/tanzania.png';
import Fcambodia from'./Components/cambodia.png';
import Ftunisia from'./Components/tunisia.png';
import Fmali from'./Components/mali.png';
import Fcyprus from './Components/cyprus.png';
import allFlag from './Components/allFlag.jpg';
import winner from './Components/winner.jpg';



class App extends React.Component{

constructor(props){
	super(props);

	this.state= {

    reset:'Start',   //used to change the header's text from start to reset
    rank:0,          //keep track of the order of the countries
    hintTotal:0,     //keep track of the total times the user used a hint
    skipTotal:0,     //keep track of the total times the user skipped
    wrongTotal:0,    //keep track of the total times the uder guessed wrong
    hintS:'s',       //used to change hintTotal when its singular
    skipS:'s',       //used to change skipTotal when its singular
    val:"",          //value of the input
    hintText:null,   //text of the hint
    capitalText:null,//text of the capital hint
    points:0,        //keep track of user's total points
    add:4,           //keep track of potential points on right answer (lowers as you hint)
    flag:null,       //keep track of the flag for each respective country

    //Images = dictionary that holds the data for the respective country 
    //Value = name of the country outline
    //Id = text name to match the input
    //Hint = text displayed for general hint
    //flag = name of the country flag
    //capital = name of country capital

    images:[
    {value:usa, id:'united states of america',hint:'The land of the free.', flag:Fusa, capital:'Washington, D.C.'},
    {value:canada, id:'canada',hint:'Maple syrup.',flag:Fcanada, capital:'Ottawa'},
    {value:china, id:'china',hint:'Most populous country.',flag:Fchina, capital:'Beijing'},
    {value:australia, id:'australia',hint:'Kangaroos.',flag:Faustralia, capital:'Canberra'},
    {value:india, id:'india',hint:'Bollywood.',flag:Findia, capital:'New Dehli'},
    {value:uk, id:'united kingdom',hint:'Shakespeare.',flag:Fuk, capital:'London'},
    {value:russia, id:'russia',hint:'Vodka and Communism.',flag:Frussia, capital:'Moscow'},
    {value:italy, id:'italy',hint:'Pizza.',flag:Fitaly, capital:'Rome'},
    {value:mexico, id:'mexico',hint:'Sombrero.',flag:Fmexico, capital:'Mexico City'},
    {value:france, id:'france',hint:'Eiffel Tower.',flag:Ffrance, capital:'Paris'},
    {value:germany, id:'germany',hint:'Lost two World wars.',flag:Fgermany, capital:'Berlin'},
    {value:brazil, id:'brazil',hint:'Amazon rainforest.',flag:Fbrazil, capital:'Brasilia'},
    {value:spain, id:'spain',hint:'Running with the bulls.',flag:Fspain, capital:'Madrid'},
    {value:egypt, id:'egypt',hint:'Pyramids.',flag:Fegypt, capital:'Cairo'},
    {value:japan, id:'japan',hint:'Anime and robots.',flag:Fjapan, capital:'Tokyo'},
    {value:newzealand, id:'new zealand',hint:'Where Lord of the rings was shot.',flag:Fnewzealand, capital:'Wellington'},
    {value:pakistan, id:'pakistan',hint:'Separated from India after partition.',flag:Fpakistan, capital:'Islamabad'},
    {value:iceland, id:'iceland',hint:'Greener than greenland.',flag:Ficeland, capital:'Reykjavik'},
    {value:norway, id:'norway',hint:'Fjords.',flag:Fnorway, capital:'Oslo'},
    {value:peru, id:'peru',hint:'Machu Picchu.',flag:Fperu, capital:'Lima'},
    {value:greece, id:'greece',hint:'Destroyed economy.',flag:Fgreece, capital:'Athens'},
    {value:denmark, id:'denmark',hint:'Owns Greenland.',flag:Fdenmark, capital:'Copenhagen'},
    {value:chile, id:'chile',hint:'Andes mountains.',flag:Fchile, capital:'Santiago'},
    {value:cuba, id:'cuba',hint:'_____ missle crisis.',flag:Fcuba, capital:'Havana'},
    {value:turkey, id:'turkey',hint:'Thankgiving bird, Hagia Sophia',flag:Fturkey, capital:'Ankara'},
    {value:indonesia, id:'indonesia',hint:'Largest Muslim Country, Borobudur, Krakatoa',flag:Findonesia, capital:'Jakarta'},
    {value:southafrica, id:'south africa',hint:'Whitest country in Africa.',flag:Fsouthafrica, capital:'Cape town, Pretoria, Bloemfontein'},
    {value:finland, id:'finland',hint:'Scared of Russia, least corruption.',flag:Ffinland, capital:'Helsinki'},
    {value:ireland, id:'ireland',hint:'Leprechaun.',flag:Fireland, capital:'Dublin'},
    {value:poland, id:'poland',hint:'Victims of WWII.',flag:Fpoland, capital:'Warsaw'},
    {value:sweden, id:'sweden',hint:'IKEA.',flag:Fsweden, capital:'Stockholm'},
    {value:israel, id:'israel',hint:'Claimed by three religions.',flag:Fisrael, capital:'Jerusalem'},
    {value:iran, id:'iran',hint:'Persia.',flag:Firan, capital:'Tehran'},
    {value:nepal, id:'nepal',hint:'Himalayan Mountains.',flag:Fnepal, capital:'Kathmandu'},
    {value:madagascar, id:'madagascar',hint:'Penguins of ____.',flag:Fmadagascar, capital:'Antananarivo'},
    {value:iraq, id:'iraq',hint:'isIs.',flag:Firaq, capital:'Baghdad'},
    {value:syria, id:'syria',hint:'isiS.',flag:Fsyria, capital:'Damascus'},
    {value:phillipines, id:'phillipines',hint:'Roasted whole pig and balut.',flag:Fphillipines, capital:'Manila'},
    {value:vietnam, id:'vietnam',hint:'Only country to beat the US in war.',flag:Fvietnam, capital:'Hanoi'},
    {value:thailand, id:'thailand',hint:'*Above your knee*-land.',flag:Fthailand, capital:'Bangkok'},
    {value:northkorea, id:'north korea',hint:'Kim Jong Un.',flag:Fnorthkorea, capital:'Pyongyang'},
    {value:portugal, id:'portugal',hint:"Origin of Brazil's language.",flag:Fportugal, capital:'Lisbon'},
    {value:argentina, id:'argentina',hint:'Football.',flag:Fargentina, capital:'Buenos Aires'},
    {value:romania, id:'romania',hint:'Vampires and gypsies.',flag:Fromania, capital:'Bucharest'},
    {value:ukraine, id:'ukraine',hint:'Chernobyl disaster.',flag:Fukraine, capital:'Kiev/Kyiv'},
    {value:southkorea, id:'south korea',hint:'K-Pop.',flag:Fsouthkorea, capital:'Seoul'},
    {value:austria, id:'austria',hint:'Archduke Franz Ferdinand.', flag:Faustria, capital:'Vienna'},
    {value:switzerland, id:'switzerland',hint:'Neutral in any conflict.',flag:Fswitzerland, capital:'Berne (Unofficial)'},
    {value:malaysia, id:'malaysia',hint:'Lost plane in the Indian ocean.',flag:Fmalaysia, capital:'Kuala Lumpur'},
    {value:venezuela, id:'venezuela',hint:'Inflated currency. Corruption.',flag:Fvenezuela, capital:'Caracas'},
    {value:belgium, id:'belgium',hint:'Famous chocolate.',flag:Fbelgium, capital:'Brussels'},
    {value:mongolia, id:'mongolia',hint:'Genghis Khan.',flag:Fmongolia, capital:'Ulaanbaatar'},
    {value:jamaica, id:'jamaica',hint:'Bob Marley.',flag:Fjamaica, capital:'Kingston'},
    {value:panama, id:'panama',hint:'Canal that connects oceans.',flag:Fpanama, capital:'Panama City'},
    {value:afghanistan, id:'afghanistan',hint:'Taliban.',flag:Fafghanistan, capital:'Kabul'},
    {value:vaticancity, id:'vatican city',hint:'The Pope.',flag:Fvaticancity, capital:"Vatican City"},
    {value:haiti, id:'haiti',hint:'Earthquakes and Tsunamis.',flag:Fhaiti, capital:'Port-au-Prince'},
    {value:hungary, id:'hungary',hint:'What happens when you do not eat for a while.',flag:Fhungary, capital:'Budapest'},
    {value:saudiarabia, id:'saudi arabia',hint:'Desert and Oil.',flag:Fsaudiarabia, capital:'Riyadh'},
    {value:srilanka, id:'sri lanka',hint:'The teardrop of Asia.',flag:Fsrilanka, capital:'Colombo, Sri Jayawardenepura Kotte'},
    {value:bangladesh, id:'bangladesh',hint:'Eastern Pakistan.',flag:Fbangladesh, capital:'Dhaka'},
    {value:macedonia, id:'macedonia',hint:'Alexander The Great.',flag:Fmacedonia, capital:'Skopje'},
    {value:ethiopia, id:'ethiopia',hint:'Haile Selassie, Messiah of Rastafarianism.',flag:Fethiopia, capital:'Addis Ababa'},
    {value:netherlands, id:'netherlands',hint:'All drugs are legal.',flag:Fnetherlands, capital:'Amsterdam'},
    {value:unitedarabemirates, id:'united arab emirates',hint:'Tallest skyscraper.',flag:Fuae, capital:'Abu Dhabi'},
    {value:armenia, id:'armenia',hint:'Turkey committed genocide on these people.',flag:Farmenia, capital:'Yerevan'},
    {value:kazakhstan, id:'kazakhstan',hint:'Borat.',flag:Fkazakhstan, capital:'Nur-Sultan'},
    {value:somalia, id:'somalia',hint:'Modern pirates.',flag:Fsomalia, capital:'Mogadishu'},
    {value:colombia, id:'colombia',hint:'Cocaine.',flag:Fcolombia, capital:'Bogota'},
    {value:tanzania, id:'tanzania',hint:'Mount Kilimanjaro.',flag:Ftanzania, capital:'Dodoma'},
    {value:cambodia, id:'cambodia',hint:'Angkor Wat.',flag:Fcambodia, capital:'Phnom Penh'},
    {value:tunisia, id:'tunisia',hint:'Carthage.',flag:Ftunisia, capital:'Tunis'},
    {value:mali, id:'mali',hint:'Great Mosque of Djenné, Mansa Musa.',flag:Fmali, capital:'Bamako'},
    {value:cyprus, id:'cyprus',hint:'Ukraine claims this island as their own.',flag:Fcyprus, capital:'Nicosia'},
    {value:winner,id:'hazel',hint:"There's no hint if you've already won!",flag:allFlag, capital:'Please stop'},
    ]
		};

    //Inherit methods and events
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onGuess = this.onGuess.bind(this);
    this.onHint = this.onHint.bind(this);
    this.onSkip = this.onSkip.bind(this);
    
	}

/*
HandleNext method used to save space, process the screen to the next country 
*/
  handleNext(){
        this.setState({hintText:""});               //reset text hint to blank
        this.setState({rank:this.state.rank+1});    //move to the next country
        this.setState({flag:null})                  //reset flag hint to blank
        this.setState({add:4})                      //reset potential points earned to default (4)
        this.setState({capitalText:null});          //reset capital hint to blank
        //reset the three hint indicators back to unused state
        document.getElementById("dot1").style.backgroundColor = '#66ff33' 
        document.getElementById("dot1").style.borderColor = 'green'
        document.getElementById("dot2").style.backgroundColor = '#66ff33'
        document.getElementById("dot2").style.borderColor = 'green'
        document.getElementById("dot3").style.backgroundColor = '#66ff33'
        document.getElementById("dot3").style.borderColor = 'green'
  }

/*
onHint method used to process 3 separate hints in order
  First hint: Text hint is shown to give some context to the country (hintText)
  Second hint: Flag of the country is shown (flag)
  Third hint: Capital city of the country is shown (capitalText)
  All hints lower the achievable point given by 1, from 4 to 1 (add)
  There are green indicators that turn red when a hint is used (dot#)
  The total hints the user uses throughout the entire game is displayed on the left side (hintTotal)
*/
  onHint(){
    
    if (this.state.add === 4) {
      this.setState({add:3});
      this.setState({hintText:this.state.images[this.state.rank].hint});
      document.getElementById("dot1").style.backgroundColor = 'red';
      document.getElementById("dot1").style.borderColor = '#ff6633';
      this.setState({hintTotal:this.state.hintTotal + 1});
      {this.state.hintTotal===0 ? this.setState({hintS:""}):this.setState({hintS:"s"})};

    }else if (this.state.add === 3) {
      this.setState({flag:this.state.images[this.state.rank].flag});
      document.getElementById("dot2").style.backgroundColor = 'red';
      document.getElementById("dot2").style.borderColor = '#ff6633';
      this.setState({add:2});
      this.setState({hintTotal:this.state.hintTotal + 1});
      {this.state.hintTotal===0 ? this.setState({hintS:""}):this.setState({hintS:"s"})};


    }else if (this.state.add === 2) {
      this.setState({capitalText:this.state.images[this.state.rank].capital});
      document.getElementById("dot3").style.backgroundColor = 'red';
      document.getElementById("dot3").style.borderColor = '#ff6633';
      this.setState({add:1});
      this.setState({hintTotal:this.state.hintTotal + 1});
      {this.state.hintTotal===0 ? this.setState({hintS:""}):this.setState({hintS:"s"})};
  }
  }

/*
onSkip method is used when the user skips 
  handleNext method is used to process to the next country
  The total skips the user uses throughout the entire game is displayed on the left side (skipTotal)
*/
  onSkip(){
       if(this.state.rank!==74){
        this.handleNext();
        this.setState({skipTotal:this.state.skipTotal + 1});
        {this.state.skipTotal===0 ? this.setState({skipS:""}):this.setState({skipS:"s"})};
      }
  }

/*
onClick method is used when the user starts the game and when the user resets.
  every state is set to its default / null 
*/
  onClick(){
      this.setState({reset:"Reset"});
      this.setState({shouldRender:true});
      if(this.state.reset==="Reset")  {
        this.setState({rank:0});
        this.setState({capitalText:null});
        this.setState({hintText:""});
        this.setState({points:0});
        this.setState({flag:null});
        this.setState({add:4});
        this.setState({hintTotal:0});
        this.setState({skipTotal:0});
        this.setState({wrongTotal:0});
        document.getElementById("dot1").style.backgroundColor = '#66ff33'
        document.getElementById("dot1").style.borderColor = 'green'
        document.getElementById("dot2").style.backgroundColor = '#66ff33'
        document.getElementById("dot2").style.borderColor = 'green'
        document.getElementById("dot3").style.backgroundColor = '#66ff33'
        document.getElementById("dot3").style.borderColor = 'green'
      }
    }

/*
onGuess method is used when the user enters an answer
  If the input is correct, then the handleNext methdd is used to process to the next country,
    then the total points is increased based on how many hints were used, from 4 to 1
  If the input is incorrect, then the total incorrect guesses increases by one 
  This can be seen on the left side of the screen
  If the user enters an input with no text (""), then nothing happens as no guess what made
  There is an commented piece of the 'else if' used for when the designer wants to scroll 
    through each country seamlessly 
*/
  onGuess(){
   if(this.state.rank!==74){
    //this.setState({rank:this.state.rank+1});

    if(document.getElementById("input").value.toLowerCase() === this.state.images[this.state.rank].id){
      
      this.setState({points:this.state.points+this.state.add});
      this.handleNext();
      
    }else if(document.getElementById("input").value.toLowerCase() !== "") {
      this.setState({wrongTotal:this.state.wrongTotal +1});
    }

    // }else if(document.getElementById("input").value.toLowerCase() === "") {
    //   this.setState({rank:this.state.rank+1});
    //   this.setState({hintText:this.state.images[this.state.rank].hint});
    //   this.setState({flag:this.state.images[this.state.rank].flag})
    //   this.setState({capitalText:this.state.images[this.state.rank].capital});
    //   this.setState({wrongTotal:this.state.wrongTotal +1});
    // }  

  }
  }

handleChange(event){
  this.setState({val: event.target.value});
}

handleSubmit(event){
this.setState({val:""});
  event.preventDefault();
}

  render(){
    
    return(

      <div>
      
      <Layout 
      reset={this.state.reset}
      shouldRender={this.state.shouldRender} 
      onClick={this.onClick}
      />

      {this.state.shouldRender ? <Header capitalText = {this.state.capitalText} wrongTotal = {this.state.wrongTotal} hintS = {this.state.hintS} skipS = {this.state.skipS} skipTotal = {this.state.skipTotal} hintTotal = {this.state.hintTotal} onSkip={this.onSkip} title={this.state.title} flag={this.state.flag} points={this.state.points} onHint={this.onHint} hintText={this.state.hintText} val={this.state.val} handleChange={this.handleChange} handleSubmit={this.handleSubmit} onGuess={this.onGuess} images = {this.state.images} rank = {this.state.rank} />:null}

      </div>

      );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
