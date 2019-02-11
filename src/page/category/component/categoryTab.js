import React from 'react';

const CategoryTab=({data,currentTab,changeTab})=>{
    return(
        <ul className='tabs'>
            {
                data.map(item=>{
                    return (
                        <li 
                        key={item.cid} 
                        className={item.cid===currentTab?'activeTab':''} 
                        onClick={()=>{
                            changeTab(item.cid)
                        }}>
                            {item.category}
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default CategoryTab
