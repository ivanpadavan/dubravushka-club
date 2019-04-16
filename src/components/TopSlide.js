import React from "react";

export const TopSlide = ({
                             image,
                             heading,
                             subheading,
                             imageHeight = '500px',
                         }) => (<div className="full-width-image margin-top-0"
                                     style={{
                                         backgroundImage: `url(${
                                             !!(image && image.childImageSharp) ? image.childImageSharp.fluid.src : image
                                             })`,
                                         backgroundPosition: `top left`,
                                         backgroundAttachment: `fixed`,
                                         height: imageHeight,
                                         paddingTop: '5rem',
                                     }}>
        <div
            style={{
                display: 'flex',
                height: '150px',
                lineHeight: '1',
                justifyContent: 'space-around',
                alignItems: 'left',
                flexDirection: 'column',
            }}
        >
            {heading && heading.length
                ? <h1
                    className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen notification is-primary"
                    style={{
                        lineHeight: '1',
                        padding: '.5rem 1.2rem',
                        borderRadius: 0,
                    }}
                >{heading}</h1>
                : null
            }
            {subheading && subheading.length
                ? <h3
                    className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen notification is-primary"
                    style={{
                        lineHeight: '1',
                        padding: '.35rem 1rem',
                        borderRadius: 0,
                    }}
                >{subheading}</h3>
                : null
            }
        </div>
    </div>
);

export default TopSlide
