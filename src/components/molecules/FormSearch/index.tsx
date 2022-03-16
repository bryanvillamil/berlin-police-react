import { useForm, Controller, SubmitHandler } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "./styled";

type FormProps = {
  onSubmit: any;
};

export const FormSearch = (props: FormProps) => {
  const { onSubmit } = props;
  const formInstance = useForm();
  const { register, control, handleSubmit } = formInstance;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        {...register("search")}
        placeholder="Search case descriptions"
      />

      <Controller
        name="dateFrom"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <DatePicker
            onChange={(e) => field.onChange(e)}
            selected={field.value}
            placeholderText="From"
          />
        )}
      />

      <Controller
        name="dateTo"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <DatePicker
            onChange={(e) => field.onChange(e)}
            selected={field.value}
            placeholderText="To"
          />
        )}
      />

      <button type="submit">Submit</button>
    </Form>
  );
};
