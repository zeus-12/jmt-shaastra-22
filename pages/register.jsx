import {
  TextInput,
  ActionIcon,
  Text,
  Button,
  Code,
  Select,
  Radio,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconTrash } from "@tabler/icons";

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

  const registerHandler = async () => {
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form.values),
    });
  };
  const copyLeadersData = (index, property) => {
    form.setFieldValue(
      `studentDetails.${index}.${property}`,
      form.getInputProps(`studentDetails.0.${property}`).value
    );
  };

  return (
    <div className="flex flex-col mx-2 sm:mx-4 items-center">
      <p className="text-5xl text-orange-400 font-bold text-center pt-4 pb-0">
        Register
      </p>
      <TextInput
        className="w-[90vw] max-w-[30rem]"
        label="Team Name"
        placeholder="Team Name"
        {...form.getInputProps("teamName")}
      />

      <div className=" w-[90vw] max-w-[30rem]">
        <Radio.Group
          label="Category"
          withAsterisk
          {...form.getInputProps("category")}
        >
          <Radio value="junior" label="Junior" />
          <Radio value="senior" label="Senior" />
        </Radio.Group>
      </div>

      {/* <Select
        label="Category"
        className=" w-[90vw] max-w-[30rem]"
        placeholder="Category"
        data={[
          { value: "Junior", label: "Junior" },
          { value: "Senior", label: "Senior" },
        ]}
        {...form.getInputProps("category")}
      /> */}
      <div className="flex mt-2 -mb-2 items-center justify-between max-w-[25rem] w-screen">
        <p className="text-2xl">Team Members</p>
        <Button
          className={
            form.values.studentDetails.length > 3
              ? "hidden"
              : "" + "bg-orange-400 hover:bg-orange-500"
          }
          onClick={() =>
            form.insertListItem("studentDetails", {
              name: "",
              phoneNo: "",
              email: "",
              school: "",
              city: "",
            })
          }
        >
          Add Member
        </Button>
      </div>

      {form.values.studentDetails.map((item, index) => (
        <div key={index} className="space-y-4">
          <div className="mt-4 flex justify-between items-center">
            <p className="">
              {index > 0 ? `Team member #${index + 1}` : `Team Leader `}
            </p>

            <ActionIcon
              color="red"
              onClick={() => form.removeListItem("studentDetails", index)}
            >
              <IconTrash size={16} />
            </ActionIcon>
          </div>
          <TextInput
            className="w-[90vw] max-w-[30rem]"
            placeholder="Name"
            withAsterisk
            {...form.getInputProps(`studentDetails.${index}.name`)}
          />
          <TextInput
            className="w-[90vw] max-w-[30rem]"
            placeholder="Phone Number (with WhatsApp)"
            withAsterisk
            {...form.getInputProps(`studentDetails.${index}.phoneNo`)}
          />
          <div className="flex justify-between items-center gap-2 w-[90vw] max-w-[30rem]">
            <TextInput
              className="flex-1"
              placeholder="School"
              withAsterisk
              {...form.getInputProps(`studentDetails.${index}.school`)}
            />
            <Button
              className={index == 0 ? "hidden" : ""}
              onClick={() => copyLeadersData(index, "school")}
              variant="outline"
              compact
            >
              Same as Leader
            </Button>
          </div>
          <TextInput
            className="w-[90vw] max-w-[30rem]"
            placeholder="Email"
            withAsterisk
            {...form.getInputProps(`studentDetails.${index}.email`)}
          />
          <div className="flex justify-between items-center gap-2 w-[90vw] max-w-[30rem]">
            <TextInput
              className="w-[90vw] max-w-[30rem]"
              placeholder="City"
              withAsterisk
              {...form.getInputProps(`studentDetails.${index}.city`)}
            />
            <Button
              className={index == 0 ? "hidden" : ""}
              onClick={() => copyLeadersData(index, "city")}
              variant="outline"
              compact
            >
              Same as Leader
            </Button>
          </div>
        </div>
      ))}

      <Button
        onClick={registerHandler}
        className="bg-orange-400 hover:bg-orange-500 mt-3"
      >
        Register
      </Button>
      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </div>
  );
};
export default Register;
