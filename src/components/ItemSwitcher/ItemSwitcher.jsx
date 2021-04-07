import react from 'react';

class ItemSwitcher extends react.Component{
    constructor(props){
        super(props);
        this.state={
            selectedItem : undefined
        }
    
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.props.changeItemFamily(1)}>Item 1</button>
                <button onClick={()=>this.props.changeItemFamily(2)}>Item 2</button>
                <button onClick={()=>this.props.changeItemFamily(3)}>Item 3</button>
            </div>
        )
    }

}
export default ItemSwitcher;