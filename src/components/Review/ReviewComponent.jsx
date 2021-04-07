import react from 'react';
import axios from 'axios';

class ReviewComponent extends react.Component{

    constructor(props){
        super(props);
        this.state={
            familyId: props.familyId,
            reviews : []
        }
    }


    componentDidMount(){
        if(this.state.familyId !== undefined){
            axios.get('http://localhost:8080/api/review/getByItemFamily/'+this.state.familyId)
            .then(response => {
            });
        }  
    }

    componentDidUpdate(){
        if(this.state.familyId !== this.props.familyId){
            axios.get('http://localhost:8080/api/review/getByItemFamily/'+this.props.familyId)
            .then(response => {
                this.setState({familyId: this.props.familyId,
                                reviews: response.data})
          
            });
        }  
    }
    render(){
        return(
            <div>
                {this.renderSwitch()}
            </div>
        )
    }

    renderSwitch(){
        if(this.state.reviews.length === 0){
            return(
                <div>
                    No Reviews
                </div>
            );
        }
        else{
            let reviewList = this.state.reviews.map(review =>{
                return(
                    <div className="review">
                        <div className="review_titleSection col-7">
                            <div className="review_title">
                                {review.title}
                            </div>
                        </div>
    
                        <div className="review_content col-9">
                            <span>{review.content}</span>
                        </div>
                        
                        <div className="review_score">
                            {review.score} people found this helpful
                        </div>
                        
                    </div>
                );
            });

            return(
                <div>
                    {reviewList}
                </div>
            )
        }
    }
}
export default ReviewComponent;