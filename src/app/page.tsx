import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
    return (
        <main className="flex h-full w-full items-center justify-center">
            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        type="button"
                        data-testid="dialog-trigger"
                        className="cursor-pointer"
                    >
                        Open
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </main>
    );
}
