import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Profile() {
  let [data, setData] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let apiData = await fetch("https://api.covid19india.org/data.json");
      let Data = await apiData.json();
      setData([...Data.statewise]);
    };
    fetchData();
  }, []);

  const history = useHistory();

  let handleClicked = ()=>{
    history.push('/');
  }

  return (
    <>
    <div className = "text-center">
      <h3 className=" text-light rounded  bg-success"> Stay Home! Stay Safe! Stay Healthy!</h3>
    </div>
    <div className="mt-3 text-right">
      <button className="btn btn-danger" onClick={handleClicked}>Sign Out</button>
    </div>
      <div className="card shadow mb-4">
        <div className="card-header py-2">
          <h3 className="m-0 font-weight-bold text-primary text-center">
            Covid-19 Statewise Data From India
          </h3>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>State</th>
                  <th>Active</th>
                  <th>TotalConfirmed</th>
                  <th>TotalRecovered</th>
                  <th>Totaldeaths</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item) => {
                  
                  return (
                    <tr>
                      <td>{item.state}</td>
                      <td>{item.active}</td>
                      <td>{item.confirmed}</td>
                      <td>{item.recovered}</td>
                      <td>{item.deaths}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
