/*

Conditional Content
○ Create a boolean variable to determine whether a user is a premium
user or not.
○ If the user is a premium member, display a message: "Thank you for
being a premium member!".
○ If not, display: "Upgrade to premium to enjoy exclusive features!".

*/

const IsPremiumUser = ({ premiumMembership }) => {

    return (
    <h2>{premiumMembership ? "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!"}</h2>
    );
};

export default IsPremiumUser;
