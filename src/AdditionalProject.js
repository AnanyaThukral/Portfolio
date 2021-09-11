import React from "react";
import styled from "styled-components";

const AdditionalProject = () => {
  return (
    <Container>
      <ProjectContainer>
        <Text>
          <Title>Compatibility Matrix</Title>
          Designed a matrix in PowerBI that incorporates a{" "}
          <Bold>
            customized filter based on the Assets release date and categorizes
            assets into Latest and Oldest releases.
          </Bold>{" "}
          Started with extracting the data from Mysql database and then forming
          a many-to-many relationship in PowerBI for domains and there
          corresponding assets for a successful categorization. Further, as per
          the requirements integrated the{" "}
          <Bold>daily automatic refreshes in PowerBI for the matrix.</Bold>
        </Text>
        <Text>
          <Title>Heat Map Design & Colour Automation</Title>
          Designed a Heat Map in PowerBI - directly extracted the data from
          Sharepoint into PowerBI and gave the color code in PowerBI to products
          based on the legend ( Target - Achieved, Partially Achieved, Planned,
          No data..). PowerBI has background color limitations - therefore,
          created customized formula and logic for colors in PowerBI for
          products and business units. Further,{" "}
          <Bold>
            automated the report in powerBI - that means every month the data is
            extracted automatically from Sharepoint into PowerBI and colors are
            given in PowerBI based on the type of data.
          </Bold>
        </Text>
        <Text>
          <Title>Excel Automation (VBA & Python)</Title>
          Automated the excel sheets and created master sheets for daily
          recurring tasks using VBA. Additionally, used Python Openpyxl library
          for updating the excel files and making the process more efficient.
          Further, used other Python libraries like Selenium and Pandas to
          manipulate the data and to work with multiple directories including
          various file extensions (zip, tar, tgz).
        </Text>
        <ImageContainer>
          <Image src="./img/SLACM.png" />
        </ImageContainer>
        <ImageContainer>
          <Image src="./img/HeatMap.png" />
        </ImageContainer>
        <Text style={{ marginTop: "30px" }}>
          <Title>Working with JIRA REST API</Title>
          This was not a project that was assigned to me but I wanted to explore
          the possibility to change how we were extracting the data from Jira
          into MySQL Database. The way data was being extracted was through perl
          scripts. The scripts were hard to maintain as a lot of people don't
          know how to code in perl and would rather prefer coding in Python.
          <br />I took the initiative and started exploring JIRA RestAPI and how
          that can be used along with Python. Python already has a library that
          eases the use of Jira REST API and has been used in production for
          years. I made good progress over the months and successfully built a
          connection between Nokia's JIRA through Python and was able to fetch
          the required data. The code can not be shared currently but will be
          used in the future developments.
        </Text>
      </ProjectContainer>
    </Container>
  );
};

export default AdditionalProject;

const Container = styled.div`
  margin: 40px 0;
  min-width: 1100px;
  color: #14213d;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
    align-items: center; */
  gap: 30px;
`;

const Text = styled.div``;

const Title = styled.div`
  color: #14213d;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  /* height: 450px; */
`;

const Bold = styled.div`
  font-weight: bold;
  display: inline;
  color: #14213d;
`;
