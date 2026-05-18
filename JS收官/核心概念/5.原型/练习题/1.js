/* 
使用原型重构之前的扑克牌程序
*/
function Poker(rank,color){
  this.rank=rank;
  this.color=color;

}

Poker.prototype.print=function(){
    if(this.rank==14){
      console.log('小王');
      return;
    }
    if(this.rank==15){
      console.log('大王');
      return;
    }
    var colors=['♥','♠','♦','♣'];
    var ranks=['1','2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    console.log(colors[this.color]+ranks[this.rank]);
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

}
Deck.prototype.print=function(){
  for(let i=0;i<this.cards.length;i++){
    this.cards[i].print();
  }
}
var deck=new Deck();
deck.print();