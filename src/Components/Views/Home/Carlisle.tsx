import React, { useState } from 'react';

const Carlsile = () => {
  const [showChildren, setShowChildren] = useState(false);
  const [showInnerLabel, setShowInnerLabel] = useState(false);
  const [innerLabelLinks, setInnerLabelLinks] = useState([]);

  const handleLabelMouseEnter = () => {
    setShowChildren(true);
  };

  const handleLabelMouseLeave = () => {
    setShowChildren(false);
    setShowInnerLabel(false);
  };

  const handleChildLabelMouseEnter = (innerLabel) => {
    setShowInnerLabel(true);
    setInnerLabelLinks(innerLabel);
  };

  const handleChildLabelMouseLeave = () => {
    setShowInnerLabel(false);
    setInnerLabelLinks([]);
  };

  const navigationItems = [
    // Your navigation items here
  ];

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 px-5 pb-5 pt-20 my-32">
      <div className="py-3 px-5 bg-white rounded shadow-xl">
        <div className="-mx-1">
          <ul className="flex w-full flex-wrap items-center h-10">
            {navigationItems.map((item, index) => (
              <li
                className="block relative"
                key={index}
                onMouseEnter={handleLabelMouseEnter}
                onMouseLeave={handleLabelMouseLeave}
              >
                <a
                  href="#"
                  className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 bg-indigo-500 text-white"
                >
                  <span className="mr-3 text-xl">
                    <i className={`mdi ${item.icon}`}></i>
                  </span>
                  <span>{item.label}</span>
                  {item.children.length > 0 && (
                    <span className="ml-2">
                      <i className="mdi mdi-chevron-down"></i>
                    </span>
                  )}
                </a>
                {item.children.length > 0 && showChildren && (
                  <div
                    className="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1"
                    onMouseEnter={() => setShowChildren(true)}
                    onMouseLeave={() => setShowChildren(false)}
                  >
                    <div className="bg-white rounded w-full relative z-10 py-1">
                      <ul className="list-reset">
                        {item.children.map((childItem, childIndex) => (
                          <li
                            key={childIndex}
                            onMouseEnter={() => handleChildLabelMouseEnter(childItem.innerLabel)}
                            onMouseLeave={handleChildLabelMouseLeave}
                          >
                            <a
                              href={childItem.link}
                              className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                            >
                              <span className="flex-1">{childItem.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {showInnerLabel && innerLabelLinks.length > 0 && (
                  <div
                    className="bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto right-0 min-w-full w-56 z-30 mt-1"
                    onMouseEnter={() => setShowInnerLabel(true)}
                    onMouseLeave={() => setShowInnerLabel(false)}
                  >
                    <div className="bg-white rounded w-full relative z-10 py-1">
                      <ul className="list-reset">
                        {innerLabelLinks.map((innerLabelItem, innerLabelIndex) => (
                          <li key={innerLabelIndex}>
                            <a
                              href={innerLabelItem.link}
                              className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                            >
                              <span className="flex-1">{innerLabelItem.links}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carlsile;
