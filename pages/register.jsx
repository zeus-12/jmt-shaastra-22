import { TextInput, ActionIcon, Button, Radio, Modal } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconTrash } from "@tabler/icons";
import { useEffect, useState } from "react";

const Register = () => {
  const form = useForm({
    initialValues: {
      teamName: "",
      category: "",
      studentDetails: [
        { name: "", phoneNo: "", email: "", school: "", city: "" },
      ],
    },
    validate: {
      teamName: (value) => (value.length > 4 ? null : "Too short"),
      category: (value) =>
        ["senior", "junior"].includes(value) ? null : "Choose a category",

      studentDetails: {
        name: (value) => (value.length > 4 ? null : "Too short"),
        school: (value) => (value.length > 4 ? null : "Too short"),
        city: (value) => (value.length > 4 ? null : "Too short"),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid Email"),
        phoneNo: (value) =>
          /^\d+$/.test(value) ? null : "Invalid Phone Number",
      },
    },
  });

  const registerHandler = async () => {
    const validationResult = form.validate();

    if (Object.keys(validationResult.errors).length > 0) {
      return;
    }
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form.values),
    });

    const data = await res.json();
    setLoading(false);
    if (data.error) {
      setTitle("Error");
    } else {
      setTitle("Success");
      form.reset();
    }
    setOpened(true);
  };

  const copyLeadersData = (index, property) => {
    form.setFieldValue(
      `studentDetails.${index}.${property}`,
      form.getInputProps(`studentDetails.0.${property}`).value
    );
  };

  const addNewTeamMember = () => {
    form.insertListItem("studentDetails", {
      name: "",
      phoneNo: "",
      email: "",
      school: "",
      city: "",
    });
  };
  // useEffect(() => {
  //   form.validate;
  // }, [form.values]);

  const [loading, setLoading] = useState(false);
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="flex flex-col mx-2 sm:mx-4 items-center">
      <p className="text-5xl text-orange-400 font-bold text-center pt-4 pb-0">
        Register
      </p>
      <TextInput
        required={true}
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

      <div className="flex mt-4 mb-2 items-center justify-between max-w-[25rem] w-screen">
        <p className="text-3xl font-semibold">Team Members</p>
        <Button
          className={
            form.values.studentDetails.length > 3
              ? "hidden"
              : "" + "bg-orange-500 hover:bg-orange-600"
          }
          onClick={addNewTeamMember}
        >
          Add Member
        </Button>
      </div>

      {form.values.studentDetails.map((item, index) => (
        <div key={index} className="space-y-4">
          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl">
              {index > 0 ? `Team member #${index + 1}` : `Team Leader `}
            </p>

            <ActionIcon
              color="red"
              className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
              variant="outline"
              onClick={() => form.removeListItem("studentDetails", index)}
            >
              <IconTrash size={16} />
            </ActionIcon>
          </div>
          <TextInput
            required={true}
            className="w-[90vw] max-w-[30rem]"
            placeholder="Name"
            withAsterisk
            {...form.getInputProps(`studentDetails.${index}.name`)}
          />
          <TextInput
            required={true}
            className="w-[90vw] max-w-[30rem]"
            placeholder="Phone Number (with WhatsApp)"
            withAsterisk
            {...form.getInputProps(`studentDetails.${index}.phoneNo`)}
          />
          <div className="flex justify-between items-center gap-2 w-[90vw] max-w-[30rem]">
            <TextInput
              required={true}
              className="flex-1"
              placeholder="School"
              withAsterisk
              {...form.getInputProps(`studentDetails.${index}.school`)}
            />
            <Button
              className={index === 0 ? "hidden" : ""}
              onClick={() => copyLeadersData(index, "school")}
              variant="outline"
              compact
            >
              Same as Leader
            </Button>
          </div>
          <TextInput
            required={true}
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
        loading={loading}
        className="hover:text-white text-orange-500 border-orange-500 hover:bg-orange-500 mt-3"
        variant="outline"
      >
        Register
      </Button>
      <p className="mt-32 text-center">
        Already registered? Download your problem statement{" "}
        <a className="text-cyan-400" href="">
          here
        </a>
      </p>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={title}
        centered={true}
        classNames={{
          title: `text-3xl font-semibold ${
            title === "Error" ? "text-orange-400" : "text-red-500"
          }`,
        }}
        radius="md"
      >
        {title === "Error" && (
          <p>Something went wrong, please try again later!</p>
        )}
        {title !== "Error" && (
          <>
            <p> Thank you for registering!</p>
            <p>
              Download your problem statement{" "}
              <a className="text-cyan-400" href="">
                here
              </a>
            </p>
          </>
        )}
      </Modal>
    </div>
  );
};
export default Register;
