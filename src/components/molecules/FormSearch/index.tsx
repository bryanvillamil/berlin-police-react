import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { 
  Form, 
  Search, 
  SelectCity, 
  ContainerDates,
  ContentButtons, 
  Submit, 
  Reset 
} from "./styled";

type FormProps = {
  onSubmit: any;
};

export const FormSearch = (props: FormProps) => {
  const { onSubmit } = props;
  const formInstance = useForm();
  const { register, control, handleSubmit, reset } = formInstance;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Search
        autoComplete="off"
        {...register("search")}
        placeholder="Search case descriptions"
      />

      <SelectCity defaultValue="berlin" {...register("location")}>
        <option value="berlin">Berlin</option>
        <option value="munich">Munich</option>
        <option value="hamburgo">Hamburgo</option>
      </SelectCity>

      <ContainerDates>
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
      </ContainerDates>

      <ContentButtons>
        <Submit type="submit">Submit</Submit>
        <Reset
          onClick={() => reset()}
        >Reset</Reset>
      </ContentButtons>
    </Form>
  );
};
