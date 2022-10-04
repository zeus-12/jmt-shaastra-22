import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const Register = () => {
  const form = useForm({
    initialValues: {
      teamName: "",
      category: "",
      studentDetails: [
        { name: "", phoneNo: "", email: "", school: "", city: "" },
      ],
    },
  });

  return (
    <div className="flex flex-col mx-2 sm:mx-4 items-center">
      <TextInput
        className="max-w-[25rem] w-screen"
        label="Team Name"
        placeholder="Team Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        className="max-w-[25rem] w-screen"
        label="Name"
        placeholder="Name"
        {...form.getInputProps("name")}
      />
      <TextInput
        className="max-w-[25rem] w-screen"
        label="Name"
        placeholder="Name"
        {...form.getInputProps("name")}
      />
    </div>
  );
};
export default Register;
