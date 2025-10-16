import React from "react";
function Features(){
    const features= [
        {
            icon: "🚚",
      title: "Fast & Reliable",
      text: "We deliver your belongings safely and on time, every time.",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      text: "Transparent pricing with no hidden fees or surprises.",
    },
    {
      icon: "🤝",
      title: "Friendly Team",
      text: "Our movers are professional, courteous, and happy to help.",
        }
    ];
    return (
      <section className="features py-5 text-center bg-light">
      <div className="container">
        <h2 className="mb-5 fw-bold">Why Move With Us?</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="display-3">{feature.icon}</div>
                  <h5 className="card-title mt-3">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;