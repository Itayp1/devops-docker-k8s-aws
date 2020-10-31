import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import WorkerCharts from './WorkerCharts'
import WorkerCharts2 from './WorkerCharts2'

import Header from "./Header";
import testPAge from "../components/testPAge";
import Combinecharts from "./Combinecharts";

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>

                    <Header />

                    <main className="container-fluid">






                        {/* <Redirect from="/" exact to="/services/pendingapproval" /> */}
                        <Switch>
                            <Route path="/test" exact component={testPAge} />
                            <Route path="/" exact component={Combinecharts} />

                            {/* <Route path="/services/getstatus/:status/:type/:serviceNameEng" exact component={ServiceStatusPage} />

                            <Route path="/multi" exact component={testPAge} />
                            <Route path="/services/rest/:serviceNameEng" exact component={RestServicePage} />
                            <Route path="/services/soap/:serviceNameEng" exact component={SoapServicePage} />
                            <Route path="/services/pendingapproval" exact component={PendingApprovalListPage} />
                            <Route path="/services/restservice/new" exact component={CreateRestService} />
                            <Route path="/services/soapservice/new" exact component={CreateSoapService} />
                            <Route path="/services/restservice/update" exact component={UpdateRestServicePage} />
                            <Route path="/services/soapservice/update" exact component={UpdateSoapServicePage} />
                            <Route path="/services/restservice/confirm/:id" exact component={ConfirmationRestServicePage} />
                            <Route path="/services/soapservice/confirm/:id" exact component={ConfirmationSoapServicePage} />
                            <Route path="/services" exact component={CardList} />
                            <Route path="/" exact component={CardList} />

                            <Route path="/" component={NotFound} />
                            <Route path="/404" component={NotFound} /> */}

                        </Switch>


                    </main>

                </BrowserRouter>

            </>
        );
    }
}
export default App;