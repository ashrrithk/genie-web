"use client";
import axios from "axios";
import Heading from "@/components/heading";
import { MessageSquare, Music } from "lucide-react";
import { set, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "./constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OpenAI from "openai";
import Empty from "@/components/ui/empty";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";

const MusicPage = () => {
  const router = useRouter();
  const [music, setMusic] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic(undefined);
      const response = await axios.post("/api/music");
      setMusic(response.data.audio);
      form.reset();
    } catch (e: any) {
      //TODO: Open Pro Modal
      console.log(e);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Music"
        description="Turn text into music"
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8 ">
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {!music && !isLoading && <Empty label="No Music Generated" />}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>

        {/* Text Input */}
        <div className="bottom-0 w-full max-w-screen">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg bg-white border w-full p-6 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-5"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className=" bg-black/10 p-4 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Guitar Acoutic"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
