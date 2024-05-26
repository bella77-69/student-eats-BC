import React from "react";

function SignUp(props) {
  return (
    <div>
      <h3>Newsletter Signup</h3>
      <p>Stay updated with the latest tips, news, and events.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default SignUp;
