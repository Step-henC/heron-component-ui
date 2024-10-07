import { HeaderTabItem, HeaderTabsProps } from './HeaderTabs.types';
import React from 'react';

const HeaderTabs: React.FC<HeaderTabsProps> = ({ items }) => {


  function displayTabLinks(items: HeaderTabItem[]) {
    return items.map((tabItem) => (
      <button className="tablinks" onClick={(e) => openCity(e, tabItem.title)}>
        {tabItem.title}
      </button>
    ));
  }

  function displayTabContents(items: HeaderTabItem[]){
    return items.map((tabItem) => 
      <div id={tabItem.title} className="tabcontent">
    <h3>{tabItem.subTitle}</h3>
    <div>{tabItem.component}</div>
    {/* <p>London is the capital city of England.</p> */}
  </div>
    )
  }

  function openCity(evt: any, cityName: string) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent') as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    
   const tabItemElement = document.getElementById(cityName)  //.style.display = 'block';
   if (tabItemElement){
    tabItemElement.style.display = 'block'
   }
    evt.currentTarget.className += ' active';
  }
  return (
    <>
      
      <div className="tab">
        {displayTabLinks(items)}
        {/* <button className="tablinks" onClick={(e) => openCity(e, 'London')}>London</button>
  <button className="tablinks" onClick={(e) => openCity(e, 'Paris')}>Paris</button>
  <button className="tablinks" onClick={(e) =>openCity(e, 'Tokyo')}>Tokyo</button> */}
      </div>
      {displayTabContents(items)}
{/* 
      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div> */}
    </>
  );
};

export default HeaderTabs;
