/* 
利用构造函数创建一幅扑克牌
*/

function Poker(rank,color){
  this.rank=rank;
  this.color=color;
  this.print=function(){
    if(rank==14){
      console.log('小王');
      return;
    }
    if(rank==15){
      console.log('大王');
      return;
    }
    var colors=['♥','♠','♦','♣'];
    var ranks=['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    console.log(colors[color]+ranks[rank]);
  }
}

function Deck(){
  this.cards=[];
  for(let i=0;i<4;i++){
    for(let j=0;j<14;j++){
      this.cards.push(new Poker(j,i));
    }
  }
  this.cards.push(new Poker(14,0));
  this.cards.push(new Poker(15,0));
  this.print=function(){
    for(let i=0;i<this.cards.length;i++){
      this.cards[i].print();
    }
  }
}
var deck=new Deck();
deck.print();