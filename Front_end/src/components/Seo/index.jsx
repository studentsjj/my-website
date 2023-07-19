import React from "react";
import {Helmet} from "react-helmet-async"

function Seo ({title, description, image, imageAlt, url, name}) {

    return(
    
    <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
       {/* Open Graph data*/}
        <meta property='og:title' content={title} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url}/>
        <meta property='og:image' content={image}/>
        <meta property='og:imageAlt' content={imageAlt}/>
        <meta property='og:description' content={description}/>
        <meta property='og:author' content={name}/>
        {/* Twitter Card data */}      
        <meta name='twitter:card'content='summary_large_image' />
        <meta name='twitter:site'content={url} />
        <meta name='twitter:creator'content={name} />
        <meta name='twitter:title'content={title} />
        <meta name='twitter:description'content={description} />
        <meta name='twitter:image'content={image} />
        <meta name='twitter:imageAlt'content={imageAlt} />
    </Helmet>
    )
}
export default Seo;