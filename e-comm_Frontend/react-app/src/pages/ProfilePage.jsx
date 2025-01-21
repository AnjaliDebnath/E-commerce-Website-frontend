import React from "react";

const ProfilePage = () => {
  const profileSections = [
    {
      title: "Your Orders",
      description: "Track, return, or buy things again",
      icon: "📦",
    },
    {
      title: "Login & Security",
      description: "Edit login, name, and mobile number",
      icon: "🔒",
    },
    {
      title: "Prime",
      description: "View benefits and payment settings",
      icon: "👑",
    },
    {
      title: "Your Addresses",
      description: "Edit addresses for orders and gifts",
      icon: "📍",
    },
    {
      title: "Your Business Account",
      description:
        "Sign up to save up to 28% with GST invoice and bulk discounts",
      icon: "💼",
    },
    {
      title: "Payment Options",
      description: "Edit or add payment methods",
      icon: "💳",
    },
    {
      title: "Amazon Pay Balance",
      description: "Add money to your balance",
      icon: "💰",
    },
    {
      title: "Contact Us",
      description: "Contact our customer service via phone or chat",
      icon: "📞",
    },
  ];

  const additionalSections = [
    {
      title: "Digital Content and Devices",
      links: [
        "Apps and more",
        "Content Library",
        "Devices",
        "Digital gifts you've received",
      ],
    },
    {
      title: "Email Alerts, Messages, and Ads",
      links: [
        "Advertising preferences",
        "Communication preferences",
        "SMS alert preferences",
        "Message Centre",
        "Alexa shopping notifications",
      ],
    },
    {
      title: "More Ways to Pay",
      links: ["Default Purchase Settings", "Amazon Pay", "Coupons"],
    },
    {
      title: "Ordering and Shopping Preferences",
      links: [
        "Leave packaging feedback",
        "Lists",
        "Manage saved IDs",
        "Your Shopping preferences",
        "Your Community Content",
        "Language settings",
        "Recalls and Product Safety Alerts",
      ],
    },
    {
      title: "Other Accounts",
      links: ["Account Linking", "Seller account", "Amazon Web Services"],
    },
    {
      title: "Shopping Programs and Rentals",
      links: [
        "Manage Your Amazon Family",
        "Subscribe & Save",
        "Shop the Kids' Store by age",
      ],
    },
    {
      title: "Subscriptions",
      links: ["Email", "Memberships & Subscriptions"],
    },
    {
      title: "Manage Your Data",
      links: [
        "Request your data",
        "Manage apps and services with data access",
        "Close Your Amazon Account",
        "Privacy Notice",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Your Account</h1>

        {/* Profile Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {profileSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-start bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalSections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-lg font-semibold mb-4">{section.title}</h2>
              <ul className="text-blue-900 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="hover:text-black hover:underline">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
