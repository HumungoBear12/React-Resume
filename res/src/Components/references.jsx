import React, { useState } from 'react';
import Ref from '../Util/ref';

const References = () => {
  const [ref, setRef] = useState(Ref);

  return (
    <div className='Container-ref'>
      <h4>My References</h4>
      <hr />
      <div className='Ref-Flex'>
        {ref.map((guy) => {
          const { id, name, title, email, phone, link } = guy;
          return (
            <div className="ref-div" key={id}>
              <h2><strong>Name:</strong> {name}</h2>
              <h3><strong>Job Title:</strong> {title}</h3>
              <p>
                <strong>Contact Information:</strong> <br />
                <p className='ppp'><strong>Email:</strong> {email} <br /> </p>
                <p className='ppp'><strong>Phone Number:</strong> {phone} <br /></p>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default References;
