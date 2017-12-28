import React from 'react';
import './styles.css';

class AppSidebar extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="AppSidebar">
                {children}
            </div>
        )
    }
}

        
            
  
export default AppSidebar;
