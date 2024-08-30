"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	firstname: z
		.string()
		.min(2, {
			message: "Имя должно быть больше 2 знаков",
		})
		.max(30, { message: "Имя должно быть не больше 30 знаков" }),
	secondname: z
		.string()
		.min(2, {
			message: "Отчество должно быть больше 2 знаков",
		})
		.max(30, { message: "Отчество должно быть не больше 30 знаков" }),
	surname: z
		.string()
		.min(2, {
			message: "Фамилия должна быть больше 2 знаков",
		})
		.max(40, { message: "Фамилия должно быть не больше 40 знаков" }),
	dateBirth: z
		.number()
		.min(1, { message: "Дата рождения должна быть не меньше 1" })
		.max(31, { message: "Дата рождения должна быть не больше 31" }),
	monthBirth: z.enum(
		[
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь",
		],
		{ message: "Месяц рождения должен быть от Января до Декабря" }
	),
	yearBirth: z
		.number()
		.min(1920, { message: "Год рождения должен быть не раньше 1920" })
		.max(2024, { message: "Год рождения должен быть не позже 2024" }),
	region: z.enum(["Курская область", "Белгородская область"], {
		message: "Регион должен быть Курская или Белгородская область",
	}),
	place: z
		.string()
		.max(50, { message: "Название района должно быть не больше 50 знаков" }),
	town: z
		.string()
		.max(50, { message: "Название н/п должено быть не больше 50 знаков" }),
	children: z.number(),
	email: z.string().email({ message: "Неверный формат электронной почты" }),
});

export function BasicForm() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstname: "",
			secondname: "",
			surname: "",
			dateBirth: 1,
			monthBirth: "Январь",
			yearBirth: 1970,
			region: "Курская область",
			place: "",
			town: "",
			children: 0,
			email: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const response = await fetch("/api/sendMail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					to: "berhaneselassie1945@gmail.com",
					subject: `КуНР и БНР`,
					body: `
					<div style="font-family: Arial, sans-serif; color: #333; padding: 4px;">
						<table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse;">	
							<tr>								
								<td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd; word-break: break-word;"><b>Почта:</b> ${values.email}</td>
							</tr>						
							<tr>								
								<td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd;"><b>ФИО:</b> ${values.firstname} ${values.secondname} ${values.surname}</td>
							</tr>
							<tr>								
								<td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd; word-break: break-word;"><b>Дата рождения:</b> ${values.dateBirth} / ${values.monthBirth} / ${values.yearBirth}</td>
							</tr>
							<tr>								
								<td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd; word-break: break-word;"><b>Место проживания:</b> ${values.region} / ${values.place} / ${values.town}</td>
							</tr>
							<tr>								
								<td style="padding: 10px; background-color: #fff; border-bottom: 1px solid #ddd; word-break: break-word;"><b>Количество детей:</b> ${values.children}</td>
							</tr>
						</table>
					</div>
				`,
				}),
			});

			if (response.ok) {
				await response.json();
				router.push("/form/checking");
			} else {
				await response.json();
				alert("Произошла ошибка. Попробуйте позже...");
			}
		} catch (error) {
			console.error("Error sending email:", error);
			alert("Произошла ошибка. Попробуйте позже...");
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="flex flex-col gap-3">
					<span className="flex justify-center text-white/60 h3 font-semibold">
						Ф И О:
					</span>
					<div className="flex flex-col items-center justify-center gap-3 flex-wrap sm:flex-row">
						<FormField
							control={form.control}
							name="surname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Фамилия</FormLabel>
									<FormControl>
										<Input
											placeholder="Введите фамилию"
											{...field}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="firstname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Имя</FormLabel>
									<FormControl>
										<Input
											placeholder="Введите имя"
											{...field}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="secondname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Отчество</FormLabel>
									<FormControl>
										<Input
											placeholder="Введите отчество"
											{...field}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<span className="flex justify-center text-white/60 h3 font-semibold">
						Дата рождения:
					</span>
					<div className="flex flex-col items-center justify-center gap-3 flex-wrap sm:flex-row">
						<FormField
							control={form.control}
							name="dateBirth"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Число</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Введите день рождения"
											{...field}
											value={field.value || ""}
											onChange={(e) => field.onChange(parseInt(e.target.value))}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="monthBirth"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Месяц</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange} // Связываем изменение значения
											defaultValue={field.value} // Устанавливаем начальное значение
										>
											<SelectTrigger className="w-80 text-primary">
												<SelectValue placeholder="Выберите месяц рождения" />
											</SelectTrigger>
											<SelectContent>
												{[
													"Январь",
													"Февраль",
													"Март",
													"Апрель",
													"Май",
													"Июнь",
													"Июль",
													"Август",
													"Сентябрь",
													"Октябрь",
													"Ноябрь",
													"Декабрь",
												].map((month) => (
													<SelectItem key={month} value={month}>
														{month}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="yearBirth"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Год</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Введите год рождения"
											{...field}
											value={field.value || ""}
											onChange={(e) => field.onChange(parseInt(e.target.value))}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<span className="flex justify-center text-white/60 text-xl font-semibold">
						Адрес регистрации:
					</span>
					<div className="flex flex-col items-center justify-center gap-3 flex-wrap sm:flex-row">
						<FormField
							control={form.control}
							name="region"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Регион</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange} // Обработка изменения значения
											defaultValue={field.value} // Установка начального значения
										>
											<SelectTrigger className="w-80 text-primary">
												<SelectValue placeholder="Выберите регион" />
											</SelectTrigger>
											<SelectContent>
												{["Курская область", "Белгородская область"].map(
													(region) => (
														<SelectItem key={region} value={region}>
															{region}
														</SelectItem>
													)
												)}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="place"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Район</FormLabel>
									<FormControl>
										<Input
											placeholder="Введите название района"
											{...field}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="town"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Населённый пункт</FormLabel>
									<FormControl>
										<Input
											placeholder="Введите название населенного пункта"
											{...field}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<span className="flex justify-center text-white/60 text-xl font-semibold">
						Количество детей в семье:
					</span>
					<div className="flex flex-col items-center justify-center gap-3 flex-wrap sm:flex-row">
						<FormField
							control={form.control}
							name="children"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Дети</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="Введите количество детей в семье"
											{...field}
											value={field.value || ""}
											onChange={(e) => field.onChange(parseInt(e.target.value))}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<span className="flex justify-center text-white/60 text-xl font-semibold">
						Почта:
					</span>
					<div className="flex flex-col items-center justify-center gap-3 flex-wrap sm:flex-row">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="Введите вашу почту"
											{...field}
											className="w-80 text-primary"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<Button variant="destructive" type="submit">
						Отправить
					</Button>
				</div>
			</form>
		</Form>
	);
}
