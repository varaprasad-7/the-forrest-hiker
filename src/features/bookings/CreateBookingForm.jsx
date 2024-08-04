import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
//import FileInput from "../../ui/FileInput";
//import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import useCreateBooking from "./useCreateBooking";
import { Select } from "../../ui/Select";

function CreateBookingForm({ onCloseModal }) {
  const { isCreating, createBooking } = useCreateBooking();
  const isWorking = isCreating;

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    createBooking(
      { ...data },
      {
        onSuccess: (data) => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isWorking}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="National Id" error={errors?.nationalId?.message}>
        <Input
          type="text"
          id="nationalId"
          disabled={isWorking}
          {...register("nationalId", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="No.Of Guests" error={errors?.noOfGuests?.message}>
        <Input
          type="Number"
          id="noOfGuests"
          disabled={isWorking}
          {...register("noOfGuests", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Cabin" error={errors?.cabin?.message}>
        <Input
          type="text"
          id="cabin"
          disabled={isWorking}
          {...register("cabin", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Check-in" error={errors?.checkIn?.message}>
        <Input
          type="date"
          id="checkIn"
          disabled={isWorking}
          {...register("checkIn", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Check-out" error={errors?.checkOut?.message}>
        <Input
          type="date"
          id="checkOut"
          disabled={isWorking}
          {...register("checkOut", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Breakfast" error={errors?.breakfast?.message}>
        <Select
          name="breakfast"
          id="breakfast"
          options={["Yes", "No"]}
          value={["Yes", "No"]}
        ></Select>
      </FormRow>

      <FormRow label="Amount" error={errors?.amount?.message}>
        <Input
          type="Number"
          id="amount"
          disabled={isWorking}
          {...register("amount", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>Create New Booking</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
