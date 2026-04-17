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
import { PaymentCategories } from "./tutorials/PaymentCategories";
import { PaymentItems } from "./tutorials/PaymentItems";
import { ExpenditureCategories } from "./tutorials/ExpenditureCategories";
import { ExpenditureItems } from "./tutorials/ExpenditureItems";
import { ExpenditureItemDetails } from "./tutorials/ExpenditureItemDetails";
import { IncomeActivity } from "./tutorials/IncomeActivity";
import { SponsorshipManagement } from "./tutorials/Sponsorship";
import { SavingManagement } from "./tutorials/SavingManagement";

export const Tutorials = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={WEBSITE_ROUTES.TUTORIALS} element={<TutorialList />} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_INCOME_MANAGEMENT} element={<IncomeActivity />}/>
          <Route path={WEBSITE_ROUTES.TUTORIAL_LOGIN} element={<Login />} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_SAVINGS_MANAGEMENT} element={<SavingManagement />} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_SPONSHOR_MANAGEMENT} element={<SponsorshipManagement />}/>
          <Route path={WEBSITE_ROUTES.TUTORIAL_REPORT_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_BALANCE_SHEET} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_CONTRIBUTION_MANAGEMENT} />
          <Route path={WEBSITE_ROUTES.TUTORIAL_EXPENDITURE_ITEM_DETAIL_MANAGEMENT} element={<ExpenditureItemDetails />} />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_EXPENDITURE_ITEM_MANAGEMENT}
            element={<ExpenditureItems />}
          />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_INVITE_COLLABORATOR}
            element={<InviteCollaborators />}
          />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_USER_REGISTRATION}
            element={<RegisterMember />}
          />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_EXPENDITURE_MANAGEMENT}
            element={<ExpenditureCategories />}
          />
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
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_PAYMENT_CATEGORY_MANAGEMENT}
            element={<PaymentCategories />}
          />
          <Route
            path={WEBSITE_ROUTES.TUTORIAL_PAYMENT_ITEM_MANAGEMENT}
            element={<PaymentItems />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};
