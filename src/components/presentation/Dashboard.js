import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import { MASK_TYPES } from "helpers/masks";
import { FlexRow } from "components/core/Grid";
import { Title, Paragraph } from "components/core/Typography";
import { Form } from "components/core/Form";
import Input from "components/core/Input";
import Button from "components/core/Button";
import Loading from "components/core/Loading";
import {
  Starships,
  ColumnTitles,
  ColumnTitle,
  Starship,
} from "./DashboardStyle";

const Dashboard = ({
  handleResupplyFrequency,
  isLoading,
  calculationResult,
}) => {
  const { register, handleSubmit } = useForm({
    defaultValues: "",
    mode: "onChange",
  });

  return (
    <>
      <Loading isLoading={isLoading} />

      <Title margin="0 0 6rem">
        Find out how many stops are required to complete a journey while
        traveling in the fictional space!
      </Title>

      <Form
        onSubmit={handleSubmit(handleResupplyFrequency)}
        data-testid="submit"
      >
        <FlexRow>
          <Input
            register={register({
              required: true,
            })}
            name="distance"
            type="text"
            label="Type a distance of mega lights:"
            mask={MASK_TYPES.number}
          />
          <Button>Calculate</Button>
        </FlexRow>
      </Form>

      {!!calculationResult.length && (
        <>
          <ColumnTitles>
            <ColumnTitle>Starships</ColumnTitle>
            <ColumnTitle>Stops</ColumnTitle>
          </ColumnTitles>
          <Starships>
            {calculationResult.map(({ starship, calc }) => (
              <Starship key={starship}>
                <Paragraph>{starship}</Paragraph>
                <Paragraph>{calc}</Paragraph>
              </Starship>
            ))}
          </Starships>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  handleResupplyFrequency: PropTypes.func.isRequired,
  calculationResult: PropTypes.array,
  isLoading: PropTypes.bool,
};

Dashboard.defaultProps = {
  isLoading: false,
  calculationResult: [],
};

export default Dashboard;
