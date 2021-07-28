import React, { Component } from 'react'


export default class CompainContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            campaigns: []
        }
    }

    async componentDidMount(){
        const url = "https://www.plugco.in/public/take_home_sample_feed";
        const response =  await fetch(url);
        const data = await response.json();
        console.log("data here", data)
        this.setState({campaigns: data.campaigns})
    }
    
    render() {
        console.log(this.state.campaigns)
        return (
            
            <div>
                 {this.state.campaigns.map((campaign) => {
                       return <div className="compain-details-media-container">
                                 <div className="compain-details-container">
                                   <div className="compain-icon" key={campaign.id}><img src={campaign.campaign_icon_url} alt="photos"/></div>
                                    <div className="compain-name-pays">
                                        <div className="compain-name" key={campaign.id}>{campaign.campaign_name}</div>
                                        <div className="compain-pays" key={campaign.id}>{campaign.pay_per_install} per install</div>
                                    </div>
                                  </div>
                                  
                                  <div className="media-container">
                                      <div key={campaign.id} >
                                          {campaign.medias.map(media=>{
                                              return <img src={media.cover_photo_url} alt="covers" />
                                         })}
                                     
                                     </div>

                                  </div>
   
                            </div>
                       
                       
                    })}

                   
                
            </div>
        )
    }
}
