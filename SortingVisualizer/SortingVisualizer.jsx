import React from 'react'

const TOTAL_BARS=200;

export default class Sorter extends React.Component{

constructor (props){

super(props);

this.state= { 
    arr:[],
    comp:[],
    sorted:[]
};

}

componentDidMount(){
    this.resetArray();
}

generateRandomNumber(min,max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

resetArray()
{
    const arr=[];
    for(let i=0;i<TOTAL_BARS;i++)
    {
        arr.push(generateRandomNumber(10,200));
    }
    this.setState({arr});
}

bubblesort(){
    let visible=[]
    arr=[...this.state.arr]
     let dummyarr=[]
     let dcomp=[]

    for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1])
      [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
      dummyarr.push([...arr])
      dumcomp.push([j,j+1])
      setTimeout(()=>{this.setState({arr : dummyarr,comp : dumcomp})},i*1000)
      }
    }

}

render(){
    const {arr} =this.state;
    return( 
        <div className="showArray">
            {
                arr.map((value,index)=> 
                (<div
                className="bars"
                key={index}
                style={{
                    backgroundColor:'orange',
                    height:'${value}px',
                }}></div>))
            }
            <button onclick={()=> this.resetArray()}>Generate New Array</button>
            <button onclick={()=> this.bubbleSort()}>BUbble Sort</button>
        </div>
    );
}

}