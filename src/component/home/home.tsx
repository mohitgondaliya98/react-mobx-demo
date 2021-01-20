import React, { Component } from 'react'
import {withStyles} from "@material-ui/core"
interface IProps{
    classes?:any
}

export class home extends Component<IProps,null> {
    render() {
        return (
            <>
                <div className={this.props.classes.itemContainer}>
Activity list here
                </div>
                
            </>
        )
    }
}

const style = (theme: any) => ({
  random: {
    float: "right",
  },
  itemContainer: {
   color:"#123"
  },
});

export default withStyles(style)(home)
