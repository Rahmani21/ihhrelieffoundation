import React from "react";

import Sidebar_for_institutional from "../../sidebar/Sidebar_for_institutional";
import Option_Selection_Institutional from "../../Option_selection/Option_Selection_Institutional";
import Navbar from "../../Navbar/Navbar";
import Navbar_2 from "../../Navbar/Navbar_2";
import Footer from "../../Footer/Footer";

const Tax_Exemtpion = () => {
  return (
    <div>
      <Navbar />

      <div
        id="container"
        className="lg:flex justify-between lg:mt-[5.5%]  p-10 bg-slate-100 gap-5"
      >
        <div className="lg:flex hidden">
          <Sidebar_for_institutional />
        </div>
        <div className="lg:hidden mt-10">
          <Option_Selection_Institutional />
        </div>

        <div
          id="content"
          className="bg-white py-14 px-10 border rounded w-[70vw]"
        >
          <div>
            <h1 className="text-3xl font-bold">Tax Exception</h1>
            <p className="py-10">
              Upon our application, IHH has been granted “Tax Exemption Status”
              through the cabinet decision no. 2011/1799 dated 04.04.2011
              according to Article 20 in Law No.4962 dated 30.07.2003 with
              reference to “Eligible for Tax Exemption” document no.48107 issued
              by Ministry of Finance on 08.05.2009.
            </p>
            <h1 className="font-bold text-xl">
              THE PRIVILEGES GRANTED BY LAW TO THE FOUNDATIONS WITH
              TAX-EXEMPTION
            </h1>
            <p className="py-10 first-letter:font-bold">
              1- According to Revenue Tax Law Cl.89 first paragraph charity
              organizations and foundations that work for public good will not
              include the donations they have received in return of a receipt in
              their income tax return provided that the donations do not exceed
              5% of the total income.
            </p>
            <p>
              According to Corporate Tax Law Clause 14 paragraph 1/b the
              corporations which donated to the charity organizations and
              foundations that are deemed to serve for the good of the public
              will get a remission of the donated amount from their income tax
              return provided that the total of the donations does not exceed 5%
              of the corporation’s profit.
            </p>
            <p className="py-10">
              The exceptions stated in Revenue Tax Law No. 193 Cl. 94 paragraphs
              number 7, 8, 9 and 14.
            </p>
            <p className="first-letter:font-bold">
              2- Delivery of goods and services that are covered in Value Added
              Tax Law No.3065 Cl.17 paragraphs 1 and 2 are not subject to value
              added tax. Moreover, delivery of goods and services to the
              hospitals, clinics, dispensaries, old folks houses, soup kitchens,
              orphanages and places for similar purposed run by non-profit
              organizations and charities are not subject to value added tax.
            </p>
            <p className="py-10">
              According to Value Added Tax Law No.3065 Cl.18 paragraph 2/c
              non-profit organizations and charities will be exempt from tax in
              their free delivery of goods and services.
            </p>
            <p className=" first-letter:font-bold">
              3- Probate Law No. 7338 Cl. 3 paragraph (a) estates and
              inheritance donated non-profit organizations and charities are
              exempt from inheritance tax.
            </p>
            <p className=" first-letter:font-bold py-10">
              4– According to Act of Fees No. 492 Cl. 59 paragraph (b) when
              charity organizations and foundations that are deemed to serve for
              the good of the public acquire estates and similar properties or
              the estates and similar properties that belong to charity
              organizations and foundations that are deemed to serve for the
              good of the public are exempt from fees of registration and
              endorsement.
            </p>
            <p className=" first-letter:font-bold">
              5- According to Real Estate Tax Law No.1319 Cl.4 paragraph (e) and
              Cl.14 paragraph (c) the real estates and properties that belong or
              is allocated to charity organizations and foundations that are
              deemed to serve for the good of the public are exempt from real
              estate tax.
            </p>
            <p className=" first-letter:font-bold py-10">
              6- According to Charity Fundraising Law No. 2860 the charity
              organizations and foundations that are deemed to serve for the
              good of the public are authorized to receive donations without
              prior consent.
            </p>
            <p className=" first-letter:font-bold">
              7- According to Law No. 748 Cl.1 Pertaining National Estates and
              Abandoned Waqf Properties and Estates Purchasable by
              Municipalities national estates and or real estate of waqfs can be
              sold to the charity organizations and foundations that are deemed
              to serve for the good of the public by the cabinet decision.
            </p>
            <p className=" first-letter:font-bold py-10">
              8- Customs Law No. 4458 Cl. 167 paragraph 7 the goods for
              educational, cultural and scientific purposes and scientific
              machines and gadgets, medical equipment for treatment research and
              diagnostic kits, animals for scientific research, biological and
              chemical substances, man-made medicinal substances, blood and
              blood plasma differentiation gadgets, substances for quality check
              of the medicines, which are imported by the charity organizations
              and foundations that are deemed to serve for the good of the
              public, will be exempt from customs tax provided that these goods
              are used not for commercial purposes but for charitable purposes.{" "}
            </p>
            <p className=" first-letter:font-bold">
              9- According to Vehicles Law No. 237 Cl. 1/d the vehicles that are
              going to be used by the persons who are identified by the
              Presidency shall have an official (black) plate.
            </p>
            <p className=" first-letter:font-bold py-10">
              10- The charity organizations and foundations that are deemed to
              serve for the good of the public are included in the government
              protocol.
            </p>
            <p className=" first-letter:font-bold">
              11- According to Public Procurement Contracts Law No. 2886 Cl. 72
              Public Treasure can sell the real estate, which is registered
              under the public treasure estate and not in public use, to the
              charity organizations and foundations that are deemed to serve for
              the good of the public considering the value at the time of the
              sale. The real estate which is acquired in this way by the charity
              organizations and foundations that are deemed to serve for the
              good of the public, cannot be used or sold for purposes other than
              the original purpose. If the real estate is not used for charity
              purposes in five years’ time after the transaction the public
              treasure will buy it back from the charity organizations or
              foundation from the initial sale value.
            </p>
            <p className=" first-letter:font-bold py-10">
              {" "}
              12- According to the Regulation Regarding the Allocation of Real
              Estate of Waqf and Charity Cl.7 which was published on official
              gazette dated 04.06.1998 and numbered 23362 The charity
              organizations and foundations that are deemed to serve for the
              good of the public is one of the recipients to whom real estate of
              waqf and charities can be allocated.
            </p>
            <p className=" first-letter:font-bold">
              13- According to Cultural and Natural Treasures Protection Law No.
              2863 Cl.14 the charity organizations and foundations that are
              deemed to serve for the good of the public can receive the
              usufructary rights of cultural and natural treasure properties
              with the consent of the Ministry of Culture and Tourism provided
              that they are used for the public service on regular periods.{" "}
            </p>
            <p className=" first-letter:font-bold py-10">
              14- According to Turkish Criminal Law No.765 Cl. 483 those who
              offend or assault the charity organizations and foundations that
              are deemed to serve for the good of the public will receive the
              penalties mentioned in Cl.480 and Cl.482 depending on the nature
              of the offence.
            </p>
          </div>
          <div>
            <img src="https://ihh.org.tr/public/page/0/14/izin-almadan-yardim-toplama-en.png" />
            <img src="https://ihh.org.tr/public/page/0/14/vergi-muafiyeti-en.png" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tax_Exemtpion;
