class GroceryListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hover: false
          };
    }

    onGroceryListItemHover() {
        this.setState({
          hover: !this.state.hover
        });
      }
    render(){
        var style = {
            fontWeight: this.state.hover ? 'bold' : 'normal'
        };
        console.log("hello render")
        return (
            <li style = {style} onMouseEnter={this.onGroceryListItemHover.bind(this)} onMouseLeave={this.onGroceryListItemHover.bind(this)}>{this.props.item}</li>
        )
    }
}
var GroceryList = (props) => (
    <ul>
        {props.items.map((item, index) =>
            <GroceryListItem key = {index} item={item} /> 
        )}
    </ul>
)
  ReactDOM.render(<GroceryList items={['Oranges', 'Bread']}/>, document.getElementById("app"));