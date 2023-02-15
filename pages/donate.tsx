// line break in the text
// bold text
// donate button open in new tab

import { Grid } from "@mui/material";

import AccordionBuilder from "../components/AccordionBuilder";
import DonationForm from "../components/DonationForm";
import { GridItemCard } from "../components/GridItem";
import HeroBanner from "../components/HeroBanner";
import { PaperSection } from "../components/PaperSection";
import SectionContainer from "../components/SectionContainer";
import content from "../content/donate-faqs";

export default function DonatePage() {
  return (
    <>
      <HeroBanner
        heading="Donate"
        subheading="Conviction vacation makes it easier for formerly incarcerated individuals to access housing and employment, two things that are crucial for reducing the odds of re-incarceration. \n\nWith your donations, you will directly help break down barriers for people with convictions in the state of Washington."
      >
        <DonationForm />
      </HeroBanner>
      <SectionContainer id="donate">
        <PaperSection
          title="How will your donations help Clearviction's goal"
          subtitle="Heres how your generosity can help us achieve our milestones and make it possible to connect our project with more and more people who need it:"
          ctaLink="https://donorbox.org/clearviction"
          ctaText="donate"
        >
          <Grid container spacing={4}>
            <GridItemCard
              xs={12}
              sm={6}
              body="Fund the technological and project management toolsneeded to grow our project."
              imgsrc="/illustrations/startup.svg"
            />
            <GridItemCard
              xs={12}
              sm={6}
              body="Provide vouchers for users who participate in our research."
              imgsrc="/illustrations/science-discovery.svg"
            />
            <GridItemCard
              xs={12}
              sm={6}
              body="Support low-income individuals in overcoming financial barriers blocking the vacation of their record."
              imgsrc="/illustrations/laptop.svg"
            />
            <GridItemCard
              xs={12}
              sm={6}
              body="Help people with convictions learn about and access our Vacation Eligibiliity calculator."
              imgsrc="/illustrations/notetaking.svg"
            />
          </Grid>
        </PaperSection>
      </SectionContainer>
      <SectionContainer>
        <PaperSection title="Donation FAQ">
          {content.donateFAQS.map((donate) => (
            <Grid key={donate.id} item xs={12} sm={6} md={4}>
              <AccordionBuilder
                id={donate.id}
                summary={donate.summary}
                details={donate.details}
                sx={{ py: 2 }}
              />
            </Grid>
          ))}
        </PaperSection>
      </SectionContainer>
    </>
  );
}
