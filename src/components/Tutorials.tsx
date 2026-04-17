import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { WEBSITE_ROUTES } from "../constants/navurl";
import { TutorialList } from "./TutorialList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OrganisationSetup } from "./tutorials/OrganisationSetup";
import { Login } from "./tutorials/Login";
import { FinancialYearSetup } from "./tutorials/FinancialYearSetup";
import { MembershipFee } from "./tutorials/MembershipFee";
import { RoleManagement } from "./tutorials/RoleManagement";
import { MemberManagement } from "./tutorials/MemberManagement";
import { InviteCollaborators } from "./tutorials/InviteCollaborators";
import { RegisterMember } from "./tutorials/RegisterMember";

export const Tutorials = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={WEBSITE_ROUTES.TUTORIALS} element={<TutorialList />} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_INCOME_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_LOGIN} element={<Login />} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_SAVINGS_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_SPONSHOR_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_REPORT_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_BALANCE_SHEET} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_CONTRIBUTION_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_INVITE_COLLABORATOR} element={<InviteCollaborators />} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_USER_REGISTRATION} element={<RegisterMember />} />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_ACCOUNT_SETUP}
            element={<OrganisationSetup />}
          />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_CURRENT_YEAR_SETUP}
            element={<FinancialYearSetup />}
          />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_MEMBERSHIP_FEE_SETUP}
            element={<MembershipFee />}
          />
          <Route path={WEBSITE_ROUTES.TUTORIAL_ORGANISATION_MANAGEMENT} />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_ROLE_MANAGEMENT}
            element={<RoleManagement />}
          />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_USER_MANAGEMENT}
            element={<MemberManagement />}
          />
          <Route path={WEBSITE_ROUTES.TUTORIAL_PAYMENT_CATEGORY_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_PAYMENT_ITEM_MANAGEMENT} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};
