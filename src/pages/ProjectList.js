import React, { useContext } from 'react';
import Filters from '../components/Filters';
import Context from '../services/context/Context';
import devInfo from '../data/devInfo';

function ProjectList1() {
  const { repos, activeFilter } = useContext(Context);

  const renderImages = (user, name) => {
    const image = <img
      className="card-img-top"alt="Thumbnail [100%x225]"
      style={{height: "225px", width: "100%", display: "block"}}
      src={`https://raw.githubusercontent.com/${user}/${name}/master/imagem.png`}
    />
    return image;
  }

  const renderRepos = () => {
    const cards = [];
    const definedRepos = devInfo.uteis.repos;

    if (!repos) return  <div className="col-md-4"></div>

      repos.reduce((acc, curr, index) => {

      }, 0)

      repos.map((element, index) => {
        devInfo.uteis.repos.forEach(repoName => {
          if (element.name === repoName.name && activeFilter === 'Todos') {
            cards.push(<div className="col-md-4" key={index}>
              <div className="card mb-4 shadow-sm">
                {renderImages(devInfo.uteis.githubUser, element.name)}
                  <div className="card-body">
                    <p className="card-text">{element.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-success">Ver</button>
                        <a href={element.html_url} target="_bank"><button type="button" className="btn btn-sm btn-outline-primary">Github</button></a>
                      </div>
                      <small className="text-muted">{repoName.type}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (element.name === repoName.name && repoName.type === activeFilter) {
            
            cards.push(<div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              {renderImages(devInfo.uteis.githubUser, element.name)}
            {/* <img className="card-img-top"alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src={`https://raw.githubusercontent.com/${devInfo.uteis.githubUser}/${element.name}/master/imagem.png`} /> */}
              <div className="card-body">
              {/* <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={{height: "225px", width: "100%", display: "block"}} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_177c69b8c83%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_177c69b8c83%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />
              <div className="card-body"> */}
                <p className="card-text">{element.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-success">Ver</button>
                    <a href={element.html_url} target="_bank"><button type="button" className="btn btn-sm btn-outline-primary">Github</button></a>
                  </div>
                  <small className="text-muted">{repoName.type}</small>
                </div>
              </div>
            </div>
            </div>);

          }
        })
      });
      return cards;
  }

  return (
      <div className="album py-5 bg-light" id="portifolio">
          <div className="container ">
            <h2 className="jumbotron-heading text-center">Portifolio</h2>

            <Filters />

            <div className="row">

              {renderRepos()}
              
            </div>
          </div>
        </div>
  );
}

export default ProjectList1;
