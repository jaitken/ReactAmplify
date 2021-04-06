import react from 'react';
import axios from 'axios';

class ReviewComponent extends react.Component{

    constructor(){
        super();
        this.state={
            familyId: 2,
            reviews : []
        }
    }


    componentDidMount(){
        axios.get('http://localhost:8080/api/review/getByItemFamily/'+2)
        .then(response => {
        console.log(response.data)
        });
    }
    render(){
        return(
            <div>
                YO
            </div>
        )
    }
}
export default ReviewComponent;