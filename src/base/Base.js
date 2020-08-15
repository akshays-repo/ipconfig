import React from 'react'
import Footer from './footer'
import Layout from './layout'
import './base.css'
import './layout.css'


const Base = ({ipdetails}) =>{


    const Showdetails = () =>(

      <div id="widget_fields" className="look-ip-details" style={{}}>
      <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">ip:</span>
    <span className="value">{ipdetails.ip}</span>
      </div>
    </div>

    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">type:</span>
    <span className="value">{ipdetails.type}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">continent:</span>
        <span className="value bold">{ipdetails.continent}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">continent_code:</span>
        <span className="value">{ipdetails.continent_code}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">country:</span>
        <span className="value bold">{ipdetails.country}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">country_code:</span>
        <span className="value">{ipdetails.country_code}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">country_flag:</span> <span className="value"><img src="https://cdn.ipwhois.io/flags/in.svg" alt="India flag" /></span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">country_capital:</span>
        <span className="value">{ipdetails.country_capital}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">country_phone:</span>
        <span className="value">{ipdetails.country_phone}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">country_neighbours:</span>
        <span className="value">{ipdetails.country_neighbours}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">region:</span>
        <span className="value bold">{ipdetails.region}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">city:</span>
        <span className="value bold">{ipdetails.city}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 Float">
        <i />
        <span className="key">latitude:</span>
        <span className="value">{ipdetails.latitude}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 Float">
        <i />
        <span className="key">longitude:</span>
        <span className="value">{ipdetails.longitude}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">asn:</span>
        <span className="value">{ipdetails.asn}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">org:</span>
        <span className="value">{ipdetails.org}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">isp:</span>
        <span className="value">{ipdetails.isp}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">timezone:</span>
        <span className="value">{ipdetails.timezone}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">timezone_name:</span>
        <span className="value">{ipdetails.timezone_name}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 Float">
        <i />
        <span className="key">timezone_dstOffset:</span>
        <span className="value">{ipdetails.timezone_dstOffset}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 Float">
        <i />
        <span className="key">timezone_gmtOffset:</span>
        <span className="value">{ipdetails.timezone_gmtOffset}</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">timezone_gmt:</span>
        <span className="value">"GMT +5:30"</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">currency:</span>
        <span className="value">"Indian Rupee"</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">currency_code:</span>
        <span className="value">"INR"</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">currency_symbol:</span>
        <span className="value">"₹"</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 Float">
        <i />
        <span className="key">currency_rates:</span>
        <span className="value">74.876532</span>
      </div>
    </div>
    <div className="json__block-entry">
      <div className="indent-0 String">
        <i />
        <span className="key">currency_plural:</span>
        <span className="value">"Indian rupees"</span>
      </div>
    </div>
    </div>
      
      )

    return (
      <div>            
        <article className="article">
          <header className="article__header">
            <h1>A to Z about your ip</h1>
          </header>
          <div className="article__body">
            
          </div>
        <Showdetails/>
      </article>

      <Footer/>
        </div>
      )}


export default Base