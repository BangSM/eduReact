import React from 'react'
import axios from 'axios'
import Pagination from 'rc-pagination'
// import styles from './Heroes.module.scss'
import 'rc-pagination/dist/rc-pagination.css'

export default class Heroes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage : 1,
      totalCount : 115,
      pageSize : 10,
      heroes: []
    }
  }

  handlePageChange = (current, pageSize) => {
    this.setState({
      currentPage : current
    }, () => {this.getHeroes()})
  }

  componentDidMount() {
    this.getHeroes()
  }

  async getHeroes() {
    const start_index = (this.state.currentPage -1) * this.state.pageSize
    const res = await axios.get(`http://eastflag.co.kr:8080/api/paged_heroes?start_index=${start_index}&page_size=${this.state.pageSize}`)
    this.setState({
      heroes: res.data.data,
      totalCount :res.data.total

    })
  }

  render() {
    return (
      <>
      <div className="row">
        {
          this.state.heroes.map(hero => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1 p-sm-2 p-md-3" key={hero.hero_id}>
              <div className="card" key={hero.hero_id}>
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} className="card-img-top" alt={hero.name} />
                <div className="card-body">
                  <h5 className="card-title">{hero.name}</h5>
                  <p className="card-text">{hero.email}</p>
                  <p className="card-text">{hero.sex}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <Pagination className="d-flex justify-content-center" current={this.state.currentPage} total={this.state.totalCount} pageSize={this.state.pageSize} onChange={this.handlePageChange}/>
      </div>
      </>
    )
  }
}