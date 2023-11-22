import React from "react";

export const Content = () => {
  return (
    <div>
      <section className="scholarships_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              Financial Management System has been designed to be user friendly
              so that users at all levels can operate it and generate the
              required accounting reports and MIS reports. Although the
              accounting system is based on double entry book keeping
              principles, the user need not have the knowledge of double entry
              accounting principles as this is abstracted and carried out in the
              back-end process. The principal features of the accounting module
              include: Web based application with simple and easy to use screens
              which will make it possible to deploy the system across multiple
              zones and departments/sections.
            </div>
            <div className="col-md-7 m-auto">
              <div className="row">
                <div className="col col-xs-6">
                  <div className="item row g-0">
                    <div className="icon col-md-3">
                      <i className="fa  fa-shield" />
                    </div>
                    <div className="item_text col-md-9">
                      <h3>Logical Security</h3>
                      <p>
                        Role based access control providing logical security to
                        use the system.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-xs-6">
                  <div className="item row g-0">
                    <div className="icon col-md-3">
                      <i className="fa fa-gg" />
                    </div>
                    <div className="item_text col-md-9">
                      <h3>Automation</h3>
                      <p>
                        The accounting entries are passed automatically in the
                        back-end and are posted in the respective General
                        Ledger.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col col-xs-6">
                  <div className="item row g-0">
                    <div className="icon col-md-3">
                      <i className="fa fa-file-text-o" />
                    </div>
                    <div className="item_text col-md-9">
                      <h3>Statements</h3>
                      <p>
                        Generate the financial statements and other reports at
                        any point of time/for any given period.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-xs-6">
                  <div className="item row g-0">
                    <div className="icon col-md-3">
                      <i className="fa fa-credit-card" />
                    </div>
                    <div className="item_text col-md-9">
                      <h3>Transactions</h3>
                      <p>
                        Supports fund-based accounting for all types of
                        transactions - Receipts, Payments, Journals and Contra
                        Entries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
