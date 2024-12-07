import React, { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";

// Keyframe animation for the spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components for different sections of the UI
const Container = styled.div`
  padding: 30px;
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin-bottom: 30px;
`;

const FileInput = styled.input`
  padding: 15px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 2px solid #ddd;
  border-radius: 8px;
  width: 100%;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007BFF;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 25px;
  font-size: 18px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoaderContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #007BFF;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;

const InsightsContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
  color: #333;
`;

const InsightsHeading = styled.h2`
  font-size: 22px;
  margin-bottom: 15px;
`;

const InsightsText = styled.p`
  font-size: 16px;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.6;
  color: #555;
`;

const Instructions = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #eef7ff;
  border: 1px solid #007BFF;
  border-radius: 8px;
  text-align: left;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
`;

const InstructionHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #0056b3;
`;

const InstructionList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const InstructionItem = styled.li`
  margin-bottom: 8px;
`;

const UploadExpenditure = () => {
  const [file, setFile] = useState(null);
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setInsights(null);

    try {
      console.log("Starting file upload...");
      const response = await axios.post("http://localhost:3000/analyze-expenditure", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response received:", response.data);

      const rawText = typeof response.data.insights === 'object'
        ? response.data.insights.rawText || "No insights available."
        : response.data.insights || "No insights available.";

      console.log("Insights extracted:", rawText);
      setInsights(rawText);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to analyze the data.");
    } finally {
      setLoading(false);
      console.log("File upload complete.");
    }
  };

  return (
    <Container>
      <Heading>Upload Expenditure Data</Heading>
      <Form onSubmit={handleSubmit}>
        <FileInput
          type="file"
          onChange={handleFileChange}
        />
        <br />
        <SubmitButton type="submit">Upload and Analyze</SubmitButton>
      </Form>

      <Instructions>
        <InstructionHeading>Dataset Instructions:</InstructionHeading>
        <InstructionList>
          <InstructionItem>The file must be in <strong>CSV format</strong>.</InstructionItem>
          <InstructionItem>Ensure the file has the following columns:</InstructionItem>
          <InstructionList>
            <InstructionItem><strong>Date</strong>: Use YYYY-MM-DD format.</InstructionItem>
            <InstructionItem><strong>Department</strong>: Name of the department (e.g., Marketing, HR).</InstructionItem>
            <InstructionItem><strong>Expense Type</strong>: Type of expense (e.g., Advertising, Training).</InstructionItem>
            <InstructionItem><strong>Amount (USD)</strong>: Expense amount in USD.</InstructionItem>
            <InstructionItem><strong>Revenue (USD)</strong>: Revenue associated with the expense, if applicable.</InstructionItem>
            <InstructionItem><strong>Operating Margin (%)</strong>: Profitability percentage, if applicable.</InstructionItem>
            <InstructionItem><strong>Employee Count</strong>: Number of employees affected, if applicable.</InstructionItem>
            <InstructionItem><strong>Notes</strong>: Any additional remarks about the expense.</InstructionItem>
          </InstructionList>
          <InstructionItem>Example row: <code>2024-01-01,Marketing,Advertising,5000,20000,25,50,Seasonal promotion</code></InstructionItem>
        </InstructionList>
      </Instructions>

      {loading && (
        <LoaderContainer>
          <Spinner />
          <p>Analyzing data, please wait...</p>
        </LoaderContainer>
      )}

      {insights && (
        <InsightsContainer>
          <InsightsHeading>Insights:</InsightsHeading>
          <InsightsText>{insights}</InsightsText>
        </InsightsContainer>
      )}
    </Container>
  );
};

export default UploadExpenditure;
