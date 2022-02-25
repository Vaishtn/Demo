import React from 'react';
import Netflix from './components/netflix';

import Raw from './raw.json';
import Text from './text.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      totalCount: Raw.message.length,
      currentPage: 1,
      countperpage: 30,
      pageLimit: 10,
      selectVal: "",
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.contentDiv = React.createRef();
    this.handlepage = this.handlepage.bind(this);
    this.getElem = this.getElem.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleResize() {
  //   const isMobile = ( window.innerWidth <= 800 ) && ( window.innerHeight <= 840 );
  //   console.log("ISmobile", isMobile);
  //   this.setState({
  //     isMobile,
  //   })
  // }

  handlepage(pageNumber) {
    this.setState({
      currentPage: pageNumber
    })
  }

  // handleClick(offset) {
  //   console.log("---", offset, (offset/12)+1);
  //   this.setState({ 
  //     offset,
  //     currentPage: parseInt((offset/12)+1), 
  //   });
  // }

  handleSelect(e) {
    console.log("select value: ", e.target.value);
    if (e.target.options[e.target.selectedIndex].text.toLowerCase() === 'new') {
      document.getElementById('select-sort').style.width = '120px';
    } else {
      document.getElementById('select-sort').style.width = '145px';
    }
    this.setState({
      selectVal: e.target.value,
    })
  }

  renderParagraph() {
    return Object.keys(Text).map(item => {
      return <p key={item}>{Text[item]}</p>
    });
  }

  getElem = () => {
    return this.contentDiv;
  }

  renderMessages() {
    const { currentPage } = this.state;
    const data = Raw.message.slice();
    const lowerVal = currentPage === 1 ? 0 : (currentPage - 1) * 30;
    const upperVal =
      data.length > currentPage * 30 ? currentPage * 30 : data.length;
    const paginatedRow = data.slice(lowerVal, upperVal);
    return paginatedRow.map(item => {
      return <p key={item}>{item}</p>
    })
  }

  render() {
    // const { totalCount, countperpage, pageLimit, selectVal } = this.state;
    return (
      <div className="App">
        {/* <RL /> */}
        {/* <CodePlayground /> */}
        {/* <Page /> */}
        {/* <DesignTable /> */}
        {/* <GiftShare /> */}
        {/* <TicTacToe /> */}
        {/* <Compiler /> */}
        {/* <OnePageCalander /> */}
        <Netflix />
        {/* <GuessNumber /> */}
         {/* <TickkingClock /> */}
        {/* <AllCountries />
        {/* <TypingSpeed /> */}
        {/* <RotateButton /> */}
        {/* <IncDecBtn /> */}
        {/* <IncDecLimit />  */}
        {/* <div id="parent_Content_Div" ref={this.contentDiv}>
          <h1>Pagination</h1>
          {this.renderMessages()}
          {totalCount && totalCount > 12 ? (
            <div className="wrapPagination">
              <Pagination
                limit={countperpage}
                total={totalCount}
                pageMovement={this.handlepage}
                pageLimit={pageLimit}
                getParentElem={this.getElem}
                selectVal={selectVal}
              />
            </div>
          ) : null}
          <div className="selectButton">
            <button className="sortButton">Sort by</button>
            <select
              name="select-tab"
              id="select-sort"
              className="selectSort"
              onChange={this.handleSelect}
            >
              {Raw.sortDropDown.slice().map((elem, idx) => (
                <option key={elem.text} value={idx - 1}>
                  {elem.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="paragraph_text">{this.renderParagraph()}</div> */}
      </div>
    );
  }
}

export default App;
